import { config } from './config'
import { configFields } from '@/data/config-fields'
import { WindowConfiguration } from './models/WindowConfiguration'

type ConfigData = {
    type?: string
    material?: string
    width?: number
    height?: number
    colorExterior?: string
    colorInterior?: string
    numberOfPanels?: string
    openingType?: string
} | null

async function loadImageAsBase64(imagePath: string): Promise<string> {
    if (typeof window !== 'undefined') {
        throw new Error('loadImageAsBase64 should only be called server-side')
    }
    const loadModule = new Function('moduleName', 'return import(moduleName)')
    const fs = await loadModule('fs')
    const path = await loadModule('path')
    const fullPath = path.join(process.cwd(), 'public', imagePath.replace(/^\//, ''))
    const fileContent = fs.readFileSync(fullPath)
    
    return `data:image/png;base64,${fileContent.toString('base64')}`
}

async function convertSvgToPngServer(svgPath: string): Promise<string> {
    const loadModule = new Function('moduleName', 'return import(moduleName)')
    const fs = await loadModule('fs')
    const path = await loadModule('path')
    const fullPath = path.join(process.cwd(), 'public', svgPath.replace(/^\//, ''))
    const svgContent = fs.readFileSync(fullPath, 'utf-8')
    
    try {
        const sharp = await loadModule('sharp')
        const svgBuffer = Buffer.from(svgContent)
        const pngBuffer = await sharp(svgBuffer).png().toBuffer()
        return `data:image/png;base64,${pngBuffer.toString('base64')}`
    } catch (error) {
        try {
            const { Resvg } = await loadModule('@resvg/resvg-js')
            const resvg = new Resvg(svgContent)
            const pngData = resvg.render()
            const pngBuffer = pngData.asPng()
            return `data:image/png;base64,${pngBuffer.toString('base64')}`
        } catch (error2) {
            const base64Svg = Buffer.from(svgContent).toString('base64')
            return `data:image/svg+xml;base64,${base64Svg}`
        }
    }
}

async function loadImageAsDataURL(imagePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
            const canvas = document.createElement('canvas')
            canvas.width = img.width
            canvas.height = img.height
            const ctx = canvas.getContext('2d')
            if (ctx) {
                ctx.drawImage(img, 0, 0)
                resolve(canvas.toDataURL('image/png'))
            } else {
                reject(new Error('Could not get canvas context'))
            }
        }
        img.onerror = reject
        img.src = imagePath
    })
}

async function createPDF(configData: ConfigData = null) {
    const { default: jsPDF } = await import('jspdf')
    const { getWindowImage } = await import('@/data/opening-options')

    const configToUse = configData 
        ? (() => {
            const tempConfig = new WindowConfiguration()
            tempConfig.type = configData.type
            tempConfig.material = configData.material
            tempConfig.width = configData.width
            tempConfig.height = configData.height
            tempConfig.colorExterior = configData.colorExterior
            tempConfig.colorInterior = configData.colorInterior
            tempConfig.numberOfPanels = configData.numberOfPanels
            tempConfig.openingType = configData.openingType
            return tempConfig
          })()
        : config

    const doc = new jsPDF({orientation: 'portrait',unit: 'mm',format: 'a4'})
    
    const isServer = typeof window === 'undefined'
    const headerImagePath = '/images/fond_pdf.png'
    const headerImageData = isServer 
        ? await loadImageAsBase64(headerImagePath)
        : await loadImageAsDataURL(headerImagePath)
    
    doc.addImage(headerImageData, 'PNG', 0, 0, 210, 40)

    doc.setFontSize(24)
    doc.setTextColor(255,255,255)
    doc.text('Devis',105,30,{align: 'center'})

    doc.setFillColor(255,255,255)
    doc.rect(0,40,210,247,'F')

    const imageToShow = getWindowImage(configToUse)

    if (imageToShow) {
        let windowImageData: string
        
        if (isServer) {
            const isSvg = imageToShow.toLowerCase().endsWith('.svg')
            if (isSvg) {
                windowImageData = await convertSvgToPngServer(imageToShow)
            } else {
                windowImageData = await loadImageAsBase64(imageToShow)
            }
        } else {
            windowImageData = await loadImageAsDataURL(imageToShow)
        }
        
        if (windowImageData.startsWith('data:image/svg')) {
            throw new Error('SVG conversion to PNG failed. Please install sharp or @resvg/resvg-js')
        }
        doc.addImage(windowImageData, 'PNG', 20, 60, 60, 60)
    }
    
    let yPosition = 70
    doc.setFontSize(12)
    doc.setTextColor(0,0,0)

    configFields.forEach((field) => {
        const value = field.getValue(configToUse)
        if (value) {
          doc.text(`${field.label}:`, 100, yPosition)
          doc.text(value, 140, yPosition)
          yPosition += 10
        }
    })
    
    return doc
}

export async function GeneratePDF() {
    const doc = await createPDF()
    doc.save('devis-fenetre.pdf')
}

export async function GeneratePDFBuffer(configData: ConfigData): Promise<Buffer> {
    const doc = await createPDF(configData)
    return Buffer.from(doc.output('arraybuffer'))
}
import { configFields } from '@/data/config-fields'
import { WindowConfiguration } from './models/WindowConfiguration'
import fs from 'fs'
import path from 'path'

async function loadImageAsBase64(): Promise<string> {
    return `data:image/png;base64,${fs.readFileSync(path.join(process.cwd(), 'public', 'images', 'fond_pdf.png')).toString('base64')}`
}

async function createPDF(configData: any) {
    const { default: jsPDF } = await import('jspdf')
    const tempConfig = new WindowConfiguration()
    if (configData) {
      tempConfig.type = configData.type
      tempConfig.material = configData.material
      tempConfig.width = configData.width
      tempConfig.height = configData.height
      tempConfig.colorExterior = configData.colorExterior
      tempConfig.colorInterior = configData.colorInterior
      tempConfig.numberOfPanels = configData.numberOfPanels
      tempConfig.openingType = configData.openingType
    }
    const doc = new jsPDF({orientation: 'portrait',unit: 'mm',format: 'a4'})
    doc.addImage(await loadImageAsBase64(), 'PNG', 0, 0, 210, 297)
    doc.setFontSize(24)
    doc.setTextColor(255,255,255)
    doc.text('Devis',105,30,{align: 'center'})
    let yPosition = 60
    doc.setFontSize(12)
    configFields.forEach((field) => {
        const value = field.getValue(tempConfig)
        if (value) {
          doc.text(`${field.label}:`, 20, yPosition)
          doc.text(value, 100, yPosition)
          yPosition += 10
        }
    })
    return doc
}

export async function GeneratePDFBuffer(configData: any): Promise<Buffer> {
    return Buffer.from((await createPDF(configData)).output('arraybuffer'))
}

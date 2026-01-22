import { config } from './config'
import { configFields } from '@/data/config-fields'

async function createPDF() {
    const { default: jsPDF } = await import('jspdf')

    const doc = new jsPDF({orientation: 'portrait',unit: 'mm',format: 'a4'})
    const imageHeader = new Image()
    imageHeader.src = '/images/fond_pdf.png'

    await new Promise((resolve)=>{
        imageHeader.onload = () =>{
            doc.addImage(imageHeader,'PNG',0,0,210,297)// A4 format
            resolve(null)
        }
    })

    doc.setFontSize(24)
    doc.setTextColor(255,255,255)
    doc.text('Devis',105,30,{align: 'center'})

    let yPosition = 60
    doc.setFontSize(12)

    configFields.forEach((field) => {
        const value = field.getValue(config)
        if (value) {
          doc.text(`${field.label}:`, 20, yPosition)
          doc.text(value, 100, yPosition)
          yPosition += 10
        }
    })
    
    return doc
}

export async function GeneratePDF() {
    const doc = await createPDF()
    doc.save('devis-fenetre.pdf')
}
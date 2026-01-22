import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { GeneratePDFBuffer } from '@/lib/pdf-generator-server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nume, email, telefon, config: configData } = body

    if (!nume || !email) {
      return NextResponse.json({ error: 'Nume si email sunt obligatorii' }, { status: 400 })
    }

    const pdfBuffer = await GeneratePDFBuffer(configData)

    // Configuration du transporteur email
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false, // true pour 465, false pour les autres ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Devis fereastra`,
      html: `<p>Buna ziua,</p><p>Va rugam sa gasiti devisul in atasament.</p><p>Multumim!</p>`,
      attachments: [{ filename: 'devis-fenetre.pdf', content: pdfBuffer }],
    }

    // Envoyer l'email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email trimis cu succes!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Eroare la trimiterea email-ului:', error)
    return NextResponse.json(
      { error: 'Eroare la trimiterea email-ului' },
      { status: 500 }
    )
  }
}

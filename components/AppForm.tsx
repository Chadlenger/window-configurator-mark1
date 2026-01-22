'use client'
import { useState } from 'react'
import { GeneratePDF } from '@/lib/pdf-generator'
import { config } from '@/lib/config'

export default function AppForm() {
    const [formData, setFormData] = useState({
        nume: '',
        email: '',
        telefon: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // Effacer le message quand l'utilisateur tape
        if (message) setMessage(null)
    }

    const handleDescarcaPDF = () => {
        console.log('=== DESCARCĂ PDF ===')
        GeneratePDF()
    }

    const handleTrimiteDevis = async () => {
        console.log('=== TRIMITE DEVIS ===')
        setIsLoading(true)
        setMessage(null)

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, config: { type: config.type, material: config.material, width: config.width, height: config.height, colorExterior: config.colorExterior, colorInterior: config.colorInterior, numberOfPanels: config.numberOfPanels, openingType: config.openingType } }),
            })

            const data = await response.json()

            if (response.ok) {
                setMessage({ type: 'success', text: 'Email trimis cu succes!' })
            } else {
                setMessage({ type: 'error', text: data.error || 'Eroare la trimiterea email-ului' })
            }
        } catch (error) {
            console.error('Eroare:', error)
            setMessage({ type: 'error', text: 'Eroare la trimiterea email-ului' })
        } finally {
            setIsLoading(false)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    const isFormValid = formData.nume.trim() !== '' && formData.email.trim() !== ''

    return (
      <div className="w-full flex flex-col items-center gap-6 max-w-md">
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nume" className="block mb-2 text-sm font-medium">Nume</label>
                <input
                    type="text"
                    id="nume"
                    name="nume"
                    value={formData.nume}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-gray-300 focus:outline-none focus:border-primary"
                />
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Adresa email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-gray-300 focus:outline-none focus:border-primary"
                />
            </div>
            <div>
                <label htmlFor="telefon" className="block mb-2 text-sm font-medium">Numar de telefon</label>
                <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-gray-300 focus:outline-none focus:border-primary"
                />
            </div>
        </form>
        
        {message && (
            <div className={`w-full p-4 border-2 ${message.type === 'success' ? 'border-green-500 bg-green-50 text-green-800' : 'border-red-500 bg-red-50 text-red-800'}`}>
                {message.text}
            </div>
        )}
        
        <div className="w-full flex gap-4">
            <button 
                type="button"
                onClick={handleDescarcaPDF}
                className="btn-form flex-1"><span>Descarca PDF</span></button>
            <button 
                type="button"
                onClick={handleTrimiteDevis}
                disabled={!isFormValid || isLoading}
                className="btn-form flex-1">
                <span>{isLoading ? 'Se trimite...' : 'Trimite devis'}</span>
            </button>
        </div>
    </div>
    )
  }
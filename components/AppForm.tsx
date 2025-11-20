'use client'
import { GeneratePDF } from '@/lib/pdf-generator'

export default function AppForm() {
    return (
      <div className="w-full flex justify-center">
        <button 
          onClick={GeneratePDF}
          className="px-6 py-3 bg-primary text-white hover:bg-primary-dark"
      >Descarcati PDFul
      </button>
    </div>
    )
  }
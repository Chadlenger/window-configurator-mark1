'use client'

import Image from 'next/image'
import { step1Options } from '@/data/step1-options'

export default function Step1Page() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-4xl font-semibold">Alegeți tipul de fereastră</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {step1Options.map((option, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 p-4 hover:border-blue-500 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
          >
            <div className="relative w-full max-w-[314px] h-auto">
              <Image
                src={option.img}
                alt={option.label}
                width={314}
                height={302}
                className="w-full h-auto object-contain"
              />
            </div>
            <span className="text-center font-medium">{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}


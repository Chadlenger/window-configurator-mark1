'use client'

import Image from 'next/image'
import {config} from '@/lib/config'
import { configFields } from '@/data/config-fields'
import { WindowTypeOptions } from '@/data/steps-options'
import { getOpeningTypeOptions } from '@/data/opening-options'

function getWindowImage(): string | null {
  if (config.type === 'Fereastra fixa' || config.type === 'Usa Fereastra') {
    const windowType = WindowTypeOptions.find(option => option.label === config.type)
    return windowType?.img || null
  }
  
  if (config.type && config.numberOfPanels && config.openingType) {
    const openingOptions = getOpeningTypeOptions(config.type, config.numberOfPanels)
    const selectedOpening = openingOptions.find(option => option.label === config.openingType)
    return selectedOpening?.img || null
  }
  
  return null
}

export default function ConfigDisplay() {
  const windowImage = getWindowImage()
  
  return (
    <div className="flex items-center justify-center gap-24" style={{ fontFamily: 'Poppins, sans-serif' }}>
        
        {windowImage && (
          <div className="flex-shrink-0 shadow-xl">
            <Image
              src={windowImage}
              alt="Fereastra configurata"
              width={320}
              height={320}
              className="object-contain"
            />
          </div>
        )}
        <div className="space-y-4">
        {configFields.map((field, index) => (
            <div key={index} className="flex justify-between gap-8">
            <span className="text-right">{field.label}</span>
            <span className="text-left font-bold">{field.getValue(config) || '-'}</span>
            </div>
        ))}
        </div>
    </div>
  )
}


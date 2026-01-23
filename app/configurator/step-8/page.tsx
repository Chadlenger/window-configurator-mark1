'use client'

import { useState, useMemo, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import AppNavigation from '@/components/AppNavigation'
import OptionCardGrid from '@/components/OptionCardGrid'
import OpeningTypeLegend from '@/components/OpeningTypeLegend'
import { getOpeningTypeOptions } from '@/data/opening-options'
import { config } from '@/lib/config'

export default function Step8Page() {
  const router = useRouter()
  
  const getMissingStep = (): string | null => {
    if (!config.type) return '/configurator/step-1'
    if (!config.material) return '/configurator/step-2'
    if (!config.width) return '/configurator/step-3'
    if (!config.height) return '/configurator/step-4'
    if (!config.colorExterior) return '/configurator/step-5'
    if (!config.colorInterior) return '/configurator/step-6'
    if (!config.numberOfPanels) return '/configurator/step-7'
    return null
  }
  useEffect(() => {
    const missingStep = getMissingStep()
    if (missingStep) {
      router.push(missingStep)
    }
  }, [router])
  
  const openingOptions = useMemo(() => {
    return getOpeningTypeOptions(config.type, config.numberOfPanels)
  }, [config.type, config.numberOfPanels])

  useEffect(() => {
    if (getMissingStep()) {
      return
    }
    if (openingOptions.length === 0) {
      router.push('/configurator/final-step')
    }
  }, [router, openingOptions.length])

  const findIndex = openingOptions.findIndex(
    (option) => option.label === config.openingType
  )
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    findIndex !== -1 ? findIndex : null
  )

  const missingStep = getMissingStep()
  if (missingStep) {return null}

  const columnsPerRow = openingOptions.length > 6 ? 6 : openingOptions.length
  const gridColumns = openingOptions.length > 6 
    ? `repeat(${columnsPerRow}, 1fr)` 
    : `repeat(${openingOptions.length}, 1fr)`

  return (
    <div className="flex flex-col items-center">
      <h2 className="step-heading text-center">Alegeți <span className="text-primary">tipul de deschidere</span></h2>
      <p className="text-center text-gray-600 mt-4 mb-10">Va rugam sa alegeți dintre aceste tipuri diferite:</p>

      <div 
        className="grid gap-10 w-full max-w-6xl"
        style={{ gridTemplateColumns: gridColumns }}
      >
        {openingOptions.map((option, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedOptionIndex(index)
              config.openingType = option.label
            }}
            className={`relative flex flex-col items-center gap-4 p-4 border-2 transition-all cursor-pointer ${
              selectedOptionIndex === index
                ? 'border-primary shadow-lg'
                : 'border-transparent hover:border-blue-500 shadow-lg hover:shadow-2xl'
            }`}
          >
            {selectedOptionIndex === index && (
              <div className="absolute -top-3.5 bg-primary rounded-full p-1.5 flex items-center justify-center z-10">
                <Image
                  src="/images/Vector.svg"
                  alt="Selected"
                  width={17}
                  height={19}
                  className="w-4 h-4"
                />
              </div>
            )}
            
            <div className="relative w-full h-40 flex items-center justify-center">
              <img
                src={option.img}
                alt={option.label}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-center font-medium">{option.label}</span>
          </div>
        ))}
      </div>

      <OpeningTypeLegend />

      <AppNavigation
        backPath="/configurator/step-7"
        nextDisabled={selectedOptionIndex === null}
        onNext={() => {
          router.push('/configurator/final-step')
        }}
      />
    </div>
  )
}
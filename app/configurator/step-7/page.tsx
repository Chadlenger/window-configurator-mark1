'use client'

import { useState, useMemo, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import AppNavigation from '@/components/AppNavigation'
import OptionCardGrid from '@/components/OptionCardGrid'
import { NumberOfPanels } from '@/data/steps-options'
import { getOpeningTypeOptions } from '@/data/opening-options'
import { config } from '@/lib/config'

export default function Step7Page() {
  const router = useRouter()
  
  const getMissingStep = (): string | null => {
    if (!config.type) return '/configurator/step-1'
    if (!config.material) return '/configurator/step-2'
    if (!config.width) return '/configurator/step-3'
    if (!config.height) return '/configurator/step-4'
    if (!config.colorExterior) return '/configurator/step-5'
    if (!config.colorInterior) return '/configurator/step-6'
    return null
  }
  
  useEffect(() => {
    const missingStep = getMissingStep()
    if (missingStep) {
      router.push(missingStep)
    }
  }, [router])
  
  const availablePanels = useMemo(() => {
    if (!config.type) return []
    return NumberOfPanels.filter(panel => 
      panel.compatibleTypes.includes(config.type!)
    )
  }, [config.type])

  useEffect(() => {
    if (getMissingStep()) {
      return
    }
    if (config.type === 'Usa Fereastra' || config.type === 'Fereastra fixa' || availablePanels.length === 0) {
      router.push('/configurator/final-step')
    }
  }, [router, availablePanels.length, config.type])

  const findIndex = availablePanels.findIndex(
    (option) => option.label === config.numberOfPanels
  )
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    findIndex !== -1 ? findIndex : null
  )

  const missingStep = getMissingStep()
  if (missingStep) {return null}

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="step-heading text-center">Alegeți <span className="text-primary">numarul de panouri</span></h2>

      <OptionCardGrid
        options={availablePanels}
        selectedIndex={selectedOptionIndex}
        onSelect={(index) => {
          setSelectedOptionIndex(index)
          config.numberOfPanels = availablePanels[index].label
        }}
        imageWidth={90}
        imageHeight={90}
        imageMaxWidth="max-w-[120px]"
        fixedImageHeight="h-40"
      />

      <AppNavigation
        backPath="/configurator/step-6"
        nextDisabled={selectedOptionIndex === null}
        onNext={() => {
          const openingOptions = getOpeningTypeOptions(config.type, availablePanels[selectedOptionIndex!]?.label)
          if (openingOptions.length > 0) {
            router.push('/configurator/step-8')
          } else {
            router.push('/configurator/final-step')
          }
        }}
      />
    </div>
  )
}
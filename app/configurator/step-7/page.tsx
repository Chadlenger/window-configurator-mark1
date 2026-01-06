'use client'

import { useState, useMemo, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import AppNavigation from '@/components/AppNavigation'
import OptionCardGrid from '@/components/OptionCardGrid'
import { NumberOfPanels } from '@/data/steps-options'
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
  
  // Vérifier que les étapes précédentes sont complètes et rediriger si nécessaire
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
    // Si porte fenêtre ou fenêtre fixe, ou si aucun panneau disponible, rediriger vers final-step
    if (config.type === 'Usa Fereastra' || config.type === 'Fereastra fixa' || availablePanels.length === 0) {
      router.push('/configurator/final-step')
    }
  }, [router, availablePanels.length, config.type])

  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    availablePanels.findIndex(
      (option) => option.label === config.numberOfPanels
    ) !== -1 ? availablePanels.findIndex(
      (option) => option.label === config.numberOfPanels
    ) : null
  )

  const missingStep = getMissingStep()
  if (missingStep) {return null}

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="step-heading text-center">Alegeți <span className="text-primary">numărul de panouri</span></h2>

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
          router.push('/configurator/final-step')
        }}
      />
    </div>
  )
}
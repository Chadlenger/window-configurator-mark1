'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AppNavigation from '@/components/AppNavigation'
import OptionCardGrid from '@/components/OptionCardGrid'
import { ColorMaterialOptions } from '@/data/steps-options'
import { config } from '@/lib/config'

export default function Step6Page() {
  const router = useRouter()
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    ColorMaterialOptions.findIndex(
      (option) => option.label === config.colorInterior
    )
  )

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="step-heading text-center">
        Alegeți <span className="text-primary">culoarea interioara</span> a ferestrelor
      </h2>

      <OptionCardGrid
        options={ColorMaterialOptions}
        selectedIndex={selectedOptionIndex}
        onSelect={(index) => {
          setSelectedOptionIndex(index)
          config.colorInterior = ColorMaterialOptions[index].label
        }}
        imageWidth={90}
        imageHeight={90}
        imageMaxWidth="max-w-[120px]"
        cardHeight="242px"
      />

      <AppNavigation
        backPath="/configurator/step-5"
        nextDisabled={selectedOptionIndex === null}
        onNext={() => {
          if (config.type === 'Usa Fereastra' || config.type === 'Fereastra fixa') {
            router.push('/configurator/final-step')
          } else {
            router.push('/configurator/step-7')
          }
        }}
      />
    </div>
  )
}
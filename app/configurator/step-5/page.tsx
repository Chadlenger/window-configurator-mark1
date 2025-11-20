'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AppNavigation from '@/components/AppNavigation'
import OptionCardGrid from '@/components/OptionCardGrid'
import { ColorMaterialOptions } from '@/data/steps-options'
import { config } from '@/lib/config'

export default function Step5Page() {
  const router = useRouter()
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    ColorMaterialOptions.findIndex((option) => option.label === config.colorExterior)
  )

  return (
    <div className="flex flex-col items-center gap-8">
      
      <h2 className="step-heading text-center">
        Alegeți <span className="text-primary">culoarea exterioara</span> a ferestrelor
      </h2>

      <OptionCardGrid
        options={ColorMaterialOptions}
        selectedIndex={selectedOptionIndex}
        onSelect={(index) => {
          setSelectedOptionIndex(index)
          config.colorExterior = ColorMaterialOptions[index].label
        }}
        imageWidth={90}
        imageHeight={90}
        imageMaxWidth="max-w-[120px]"
      />

      <AppNavigation
        backPath="/configurator/step-4"
        nextDisabled={selectedOptionIndex === null}
        onNext={() => {
          router.push('/configurator/step-6')
        }}
      />
    </div>
  )
}
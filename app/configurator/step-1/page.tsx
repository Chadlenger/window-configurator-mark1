'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { step1Options } from '@/data/step1-options'
import AppNavigation from '@/components/AppNavigation'
import OptionCardGrid from '@/components/OptionCardGrid'
import { config } from '@/lib/config'

export default function Step1Page() {
  const router = useRouter()
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="step-heading">Alegeți <span className="text-primary">Tipul</span> de fereastră</h2>
      
      <OptionCardGrid
        options={step1Options}
        selectedIndex={selectedOptionIndex}
        onSelect={(index) => {
            //alert('element selected : ' + step1Options[index].label)
            setSelectedOptionIndex(index)
            config.type = step1Options[index].label
          }}


        imageWidth={314}
        imageHeight={302}
        imageMaxWidth="max-w-[314px]"
      />

      <AppNavigation
        backDisabled={true}  
        onNext={() => {router.push('/configurator/step-2')}}
      />
    </div>
  )
}


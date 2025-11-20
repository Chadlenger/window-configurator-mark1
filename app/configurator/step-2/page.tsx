'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { WindowMaterialOptions } from '@/data/steps-options'
import AppNavigation from '@/components/AppNavigation'
import OptionCardGrid from '@/components/OptionCardGrid'
import { config } from '@/lib/config'

export default function Step2Page() {
    const router = useRouter()
    const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null)
  
    return (
        <div className="flex flex-col items-center gap-8">
            <h2 className="step-heading">
              Ce <span className="text-primary">material</span> va convine?
            </h2>

            <OptionCardGrid
              options={WindowMaterialOptions}
              selectedIndex={selectedOptionIndex}
              onSelect={(index) => {
                setSelectedOptionIndex(index)
                //alert('Élément sélectionné : ' + step2Options[index].label)
                config.material = WindowMaterialOptions[index].label
                
              }}
              imageWidth={150}
              imageHeight={150}
              imageMaxWidth="max-w-[216px]"
            />

            <AppNavigation  
                backPath="/configurator/step-1"
                nextDisabled={selectedOptionIndex === null}
                onNext={() => {router.push('/configurator/step-3')}}
            />
        </div>
    );
}
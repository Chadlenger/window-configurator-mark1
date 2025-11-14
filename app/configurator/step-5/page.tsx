'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { step5Options } from '@/data/step5-options'
import AppNavigation from '@/components/AppNavigation'
import RangeSlider from '@/components/RangeSlider'
import { config } from '@/lib/config'

export default function Step5Page() {
    const router = useRouter()

    return (
        <div className="flex flex-col items-center gap-8">
            <h2 className="step-heading">
                Alegeți <span className="text-primary">Inaltimea</span> Ferestrei
            </h2>

            <RangeSlider min={50} max={200} step={1} label="Inaltimea Ferestrei 50 - 200 cm" onChange={(value) => {config.height = value}} />

            <AppNavigation
            backPath="/configurator/step-4"
            onNext={() => {router.push('/configurator/step-5')}}
        />
        </div>
        
    )
}
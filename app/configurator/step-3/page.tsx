'use client'

import { useRouter } from 'next/navigation'
import AppNavigation from '@/components/AppNavigation'
import RangeSlider from '@/components/RangeSlider'

import { config } from '@/lib/config'

export default function Step3Page() {
    const router = useRouter()
    config.width = 200

    return (
        <div className="flex flex-col items-center gap-8">
            <h2 className="step-heading">
                Alegeți <span className="text-primary">Lungimea</span> Ferestrei
            </h2>

            <RangeSlider min={100} max={300} step={1} label="Lungimea Ferestrei 100 - 300 cm" onChange={(value) => {config.width = value}} />

            <AppNavigation
            backPath="/configurator/step-2"
            onNext={() => {router.push('/configurator/step-4')}}
        />
        </div>
        
    )
}
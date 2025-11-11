'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { step2Options } from '@/data/step2-options'
import AppNavigation from '@/components/AppNavigation'
import OptionCardGrid from '@/components/OptionCardGrid'
import { config } from '@/lib/config'

export default function Step3Page() {

    return (
        <div className="flex flex-col items-center gap-8">
            <h2 className="step-heading">
                Alegeți materialul pentru fereastră
            </h2>
        </div>
    )
}
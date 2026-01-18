'use client'

import {useRouter} from 'next/navigation'
import AppForm from '@/components/AppForm'
import ConfigDisplay from '@/components/ConfigDisplay'
import {useEffect} from 'react'
import { config } from '@/lib/config'

export default function final_step() {
    const router = useRouter()

    useEffect(() => {
        if (!config.isComplete()) {router.push('/configurator/step-1')}
    }, [router])
    
    if (!config.isComplete()) {return null}
    
    else{
        return(
            <div className="flex flex-col items-center gap-8">
                <h2 className='step-heading text-center'> Devisul <span className="text-primary">vostru</span> </h2>
                <ConfigDisplay/>
                <AppForm />
            </div>
        );
    }
}  
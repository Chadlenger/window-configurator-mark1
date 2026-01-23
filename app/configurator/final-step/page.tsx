'use client'

import {useRouter} from 'next/navigation'
import AppForm from '@/components/AppForm'
import ConfigDisplay from '@/components/ConfigDisplay'
import {useEffect,useState} from 'react'
import { config } from '@/lib/config'

export default function final_step() {
    const router = useRouter()
    const [isReady, setIsReady] = useState(false)
    useEffect(() => {
        const TEST_MODE = true //set to true if testing : )  
        
        if (TEST_MODE && !config.isComplete()) {
            config.type = 'Fereastra simpla'  
            config.material = 'PVC'
            config.width = 200
            config.height = 125
            config.colorExterior = 'Gri Tip Ral'
            config.colorInterior = 'Gri Deschis Ral'
            config.numberOfPanels = '2 panouri'
            config.openingType = 'Option 1' 
        }
        setIsReady(true)
    },[])

    useEffect(() => {if (!config.isComplete()) {router.push('/configurator/step-1')}}, [router])
    
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
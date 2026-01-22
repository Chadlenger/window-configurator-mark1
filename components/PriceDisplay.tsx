'use client'

import { useEffect, useState} from 'react'
import {config } from '@/lib/config'
import { calculateTotalPrice} from '@/data/prices'

export default function PriceDisplay(){
    const [price, setPrice] = useState<number | null>(null)

    useEffect(() =>{
        const calculatePrice = () => {
            const configData = {
                type: config.type,
                material: config.material,
                width: config.width,
                height: config.height,
                colorExterior: config.colorExterior,
                colorInterior: config.colorInterior,
                numberOfPanels: config.numberOfPanels,
                openingType: config.openingType,
            }
            const calculatedPrice = calculateTotalPrice(configData)
            setPrice(calculatedPrice)            
        }
        calculatePrice()

        const interval = setInterval(calculatePrice, 500)
        return () => clearInterval(interval)

    },[])

    if (price === null || price === 0) {
        return null
    }

    return (
        <div className="flex flex-col items-end">
            <span className="text-lg text-gray-600 mb-1">Pret total</span>
            <span className="text-xl font-bold text-primary">
                {price.toFixed(2)} RON
            </span>
        </div>
    )

}
'use client'

import { useEffect, useMemo, useState } from 'react'

type RangeSliderProps = {
    min: number
    max: number
    step?: number
    label?: string
    onChange?: (value: number) => void
}

export default function RangeSlider({min,max,step = 1,label,onChange}: 
    RangeSliderProps) {
        const clamp = useMemo(() => (value: number) => Math.min(Math.max(value, min), max),[min, max])
        let initialValue = (min + max) /2
        const [value,setValue] = useState<number>(()=> clamp(initialValue))   

        useEffect(() => {setValue(clamp(initialValue ?? min))}, [clamp, initialValue])

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
            const nextValue = clamp(Number(event.target.value))
            setValue(nextValue)
            onChange?.(nextValue)
        }

        return(
            <div className="flex flex-col gap-2">
            {label ? (<label className="flex justify-center mt-4 mb-10 text-2xl" htmlFor={label}>{label}</label>) : null}

            <div className="flex items-center gap-4">
                <input
                id={label}
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleChange}
                className="w-full range-slider"
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={value}
                />
            </div>

            <div className="flex justify-center mt-10">
                <div className="length-display">{value}cm</div>
            </div>
        </div>
        )
    }
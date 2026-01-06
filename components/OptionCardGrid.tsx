'use client'

import Image from 'next/image'

type Option = {
  label: string
  img: string
}

type OptionCardGridProps = {
  options: Option[]
  selectedIndex: number | null
  onSelect: (index: number) => void
  imageWidth: number
  imageHeight: number
  imageMaxWidth?: string
  fixedImageHeight?: string
}

export default function OptionCardGrid({
  options,
  selectedIndex,
  onSelect,
  imageWidth,
  imageHeight,
  imageMaxWidth = 'max-w-[314px]',
  fixedImageHeight,
}: OptionCardGridProps) {
  return (
    <div 
      className="grid gap-10 w-full max-w-6xl"
      style={{ gridTemplateColumns: `repeat(${options.length}, 1fr)` }}
    >
      {options.map((option, index) => (
        <div
          key={index}
          onClick={() => onSelect(index)}
          className={`relative flex flex-col items-center gap-4 p-4 border-2 transition-all cursor-pointer ${
            selectedIndex === index
              ? 'border-primary shadow-lg'
              : 'border-transparent hover:border-blue-500 shadow-lg hover:shadow-2xl'
          }`}
        >
          {/* Coche de sélection */}
          {selectedIndex === index && (
            <div className="absolute -top-3.5 bg-primary rounded-full p-1.5 flex items-center justify-center z-10">
              <Image
                src="/images/Vector.svg"
                alt="Selected"
                width={17}
                height={19}
                className="w-4 h-4"
              />
            </div>
          )}
          
          <div className={`relative w-full ${fixedImageHeight ? '' : imageMaxWidth} ${fixedImageHeight || 'h-auto'} flex items-center justify-center`}>
            <Image
              src={option.img}
              alt={option.label}
              width={imageWidth}
              height={imageHeight}
              className={`w-full ${fixedImageHeight ? 'h-full' : 'h-auto'} object-contain`}
            />
          </div>
          <span className="text-center font-medium">{option.label}</span>
        </div>
      ))}
    </div>
  )
}


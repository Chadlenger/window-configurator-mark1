import { NumberOfPanels } from './steps-options'

export const windowTypePrices: Record<string, number> = {
  'Fereastra simpla': 350,
  'Fereastra culisanta': 450,
  'Usa Fereastra': 650,
  'Fereastra fixa': 280,
}

export const materialPrices: Record<string, number> = {
  'PVC': 0,
  'Aluminium': 180,
  'Lemn': 320,
}

export const dimensionPricing = {
  basePrice: 80,
  pricePerCm2: 0.35,
}

export function calculateDimensionPrice(width: number, height: number): number {
  const surface = width * height
  return dimensionPricing.basePrice + (surface * dimensionPricing.pricePerCm2)
}

export const colorPrices: Record<string, number> = {
  'Alb Ral': 0,
  'Gri Antracit Ral': 45,
  'Gri Tip Ral': 35,
  'Gri Deschis Ral': 25,
  'Negru Grafit Ral': 55,
}

export const exteriorColorPrices = colorPrices
export const interiorColorPrices = colorPrices

const PANEL_MULTIPLIERS = [1.0, 1.2, 1.32]

function getNumberOfPanelsMultiplier(windowType: string | undefined, numberOfPanels: string): number {
  if (!windowType) return 1.0
  
  const availablePanels = NumberOfPanels.filter(panel => 
    panel.compatibleTypes.includes(windowType)
  )
  
  const selectedIndex = availablePanels.findIndex(panel => panel.label === numberOfPanels)
  
  return PANEL_MULTIPLIERS[selectedIndex] ?? 1.0
}

export interface WindowConfiguration {
  type?: string
  material?: string
  width?: number
  height?: number
  colorExterior?: string
  colorInterior?: string
  numberOfPanels?: string
  openingType?: string
}

export function calculateTotalPrice(config: WindowConfiguration): number {
  let totalPrice = 0
  
  if (config.type && windowTypePrices[config.type]) {
    totalPrice += windowTypePrices[config.type]
  }
  
  if (config.material && materialPrices[config.material]) {
    totalPrice += materialPrices[config.material]
  }
  
  if (config.width && config.height) {
    totalPrice += calculateDimensionPrice(config.width, config.height)
  }
  
  if (config.colorExterior && exteriorColorPrices[config.colorExterior]) {
    totalPrice += exteriorColorPrices[config.colorExterior]
  }
  
  if (config.colorInterior && interiorColorPrices[config.colorInterior]) {
    totalPrice += interiorColorPrices[config.colorInterior]
  }
  
  if (config.numberOfPanels && config.type) {
    const multiplier = getNumberOfPanelsMultiplier(config.type, config.numberOfPanels)
    totalPrice *= multiplier
  }
  
  return Math.round(totalPrice * 100) / 100
}

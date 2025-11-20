import { WindowConfiguration } from '@/lib/models/WindowConfiguration'

export type ConfigField = {
  label: string
  getValue: (config: WindowConfiguration) => string | null
}

export const configFields: ConfigField[] = [
    { label: 'Tipul de fereastra', getValue: (config) => config.type || null },
    { label: 'Material', getValue: (config) => config.material || null },
    { label: 'Lungimea', getValue: (config) => config.width ? `${config.width} cm` : null },
    { label: 'Inaltimea', getValue: (config) => config.height ? `${config.height} cm` : null },
    { label: 'Culoarea exterioara', getValue: (config) => config.colorExterior || null },
    { label: 'Culoarea interioara', getValue: (config) => config.colorInterior || null },
]
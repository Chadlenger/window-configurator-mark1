import {config} from '@/lib/config'
import { configFields } from '@/data/config-fields'


export default function ConfigDisplay() {
  return (
    <div className="flex items-center justify-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="space-y-4">

        {configFields.map((field, index) => (
            <div key={index} className="flex justify-between gap-8">
            <span className="text-right">{field.label}</span>
            <span className="text-left font-bold">{field.getValue(config) || '-'}</span>
            </div>
        ))}

        </div>
    </div>
  )
}


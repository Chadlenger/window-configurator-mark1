export default function OpeningTypeLegend() {
  return (
    <div className="mt-8 w-full max-w-4xl">
      <h3 className="text-lg font-semibold mb-4 text-center">
        Pentru a înțelege mai bine direcțiile de deschidere:
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded">
            <span className="text-gray-600">+</span>
          </div>
          <span>→ Vitraj fix</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center border border-green-500 rounded">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span>→ Deschidere cu mâner inclus</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="2" width="16" height="16" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M10 2L10 18M2 10L18 10" stroke="currentColor" strokeWidth="1"/>
              <path d="M10 2L18 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span>→ Battant stânga: Se deschide de la dreapta la stânga</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="2" width="16" height="16" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M10 2L10 18M2 10L18 10" stroke="currentColor" strokeWidth="1"/>
              <path d="M10 2L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span>→ Battant dreapta: Se deschide de la stânga la dreapta</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="2" width="16" height="16" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M10 2L10 18M2 10L18 10" stroke="currentColor" strokeWidth="1"/>
              <path d="M10 2L18 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M10 2L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span>→ Oscillo-battant stânga: Se deschide și se basculează</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="2" width="16" height="16" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M10 2L10 18M2 10L18 10" stroke="currentColor" strokeWidth="1"/>
              <path d="M10 2L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M10 2L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span>→ Oscillo-battant dreapta: Se deschide și se basculează</span>
        </div>
      </div>
    </div>
  )
}


'use client'

import { useRouter } from 'next/navigation'

type AppNavigationProps = {
  onNext?: () => void | Promise<void>
  onBack?: () => void
  nextDisabled?: boolean
  backPath?: string
  nextLabel?: string
  backLabel?: string
}

export default function AppNavigation({
  onNext,
  onBack,
  nextDisabled,
  backPath,
  nextLabel = 'Suivant',
  backLabel = 'Retour',
}: AppNavigationProps) {
  const router = useRouter()

  return (
    <div className="flex justify-center gap-16 p-4 mt-8">
      {backPath && (
        <button
          onClick={() => {
            onBack?.()
            router.push(backPath)
          }}
          className="px-6 py-3 w-[152px] bg-transparent border-2 border-blue-500 text-black hover:bg-gray-100 transition-colors"
        >
          <span>{backLabel}</span>
        </button>
      )}
      <button
        onClick={onNext}
        disabled={nextDisabled}
        className="px-6 py-3 w-[152px] bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <span>{nextLabel}</span>
      </button>
    </div>
  )
}
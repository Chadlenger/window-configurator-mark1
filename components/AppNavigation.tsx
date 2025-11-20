'use client'

import { useRouter } from 'next/navigation'

type AppNavigationProps = {
  onNext?: () => void | Promise<void>
  onBack?: () => void
  backDisabled?: boolean
  nextDisabled?: boolean
  backPath?: string
  nextLabel?: string
  backLabel?: string
}

export default function AppNavigation({
  onNext,
  onBack,
  backDisabled,
  nextDisabled = false,
  backPath,
  nextLabel = 'Urmatorul',
  backLabel = 'Inapoi',
}: AppNavigationProps) {
  const router = useRouter()

  return (
    <div className="flex justify-center gap-16 p-4 mt-8">
      {backPath && (
        <button
        disabled={backDisabled}
        onClick={() => {
          if (backDisabled) return
            onBack?.()
            router.push(backPath)
          }}
          className="btn-nav-back"
        >
          <span>{backLabel}</span>
        </button>
      )}
      <button
        onClick={onNext}
        disabled={nextDisabled}
        className={`btn-nav-next ${nextDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <span>{nextLabel}</span>
      </button>
    </div>
  )
}
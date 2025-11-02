'use client'
import{useEffect} from 'react'
import {useRouter} from 'next/navigation'




export default function Home() {

  const router = useRouter()
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/configurator/step-1')
    },3000)
    return () => clearTimeout(timer)
  },[router])

  return (
    <div className="pt-24 flex flex-col items-center gap-6">
      <h1 className="text-4xl font-semibold">
        Bun venit la Configuratorul de Ferestre Thomas Concept
      </h1>
      <p className="text-lg">
        Incepe configurarea ferestrelor tale.
      </p>
    </div>
  );
}

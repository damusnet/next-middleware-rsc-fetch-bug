'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function Inner() {
  const searchParams = useSearchParams()
  return <div id="sp-display" style={{ padding: 8, background: '#eee', marginBottom: 8 }}>
    Current search params: <strong>{searchParams.toString() || '(none)'}</strong>
  </div>
}

export default function SearchParamDisplay() {
  return <Suspense fallback={<div>Loading...</div>}><Inner /></Suspense>
}

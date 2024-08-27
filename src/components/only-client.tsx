'use client'

import { ReactNode, useEffect, useState } from 'react'

export function OnlyClient({ children }: { children: ReactNode }) {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	if (!isClient) return null
	return <>{children}</>
}

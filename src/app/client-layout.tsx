'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

type Props = {
	children: ReactNode
}

export default function ClientLayout({ children }: Props) {
	return (
		<>
			<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
				{children}
			</ThemeProvider>
		</>
	)
}

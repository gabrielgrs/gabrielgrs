'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

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

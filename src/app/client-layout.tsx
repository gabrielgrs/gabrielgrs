'use client'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

type Props = {
	children: ReactNode
}

const client = new QueryClient()

export default function ClientLayout({ children }: Props) {
	return (
		<QueryClientProvider client={client}>
			<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
				{children}
			</ThemeProvider>
		</QueryClientProvider>
	)
}

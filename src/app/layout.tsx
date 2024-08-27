import '../styles/globals.css'
import type { Metadata } from 'next'
import { Manrope as font } from 'next/font/google'
import ClientLayout from './client-layout'
import { MouseFollower } from '@/components/mouse-follower'
import { ReactNode } from 'react'

const inter = font({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
	title: 'Gabriel Portfolio',
	description: 'Portfolio of Gabriel',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ClientLayout>
					<MouseFollower />
					{children}
				</ClientLayout>
			</body>
		</html>
	)
}

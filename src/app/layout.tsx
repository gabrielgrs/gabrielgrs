import '../styles/globals.css'
import { getLanguage } from '@/actions/language'
import { MouseFollower } from '@/components/mouse-follower'
import type { Metadata } from 'next'
import { Urbanist as NextFont } from 'next/font/google'
import { ReactNode } from 'react'
import ClientLayout from './client-layout'

const font = NextFont({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'Gabriel Portfolio',
	description: 'Portfolio of Gabriel',
}

type Props = {
	children: ReactNode
}

export default async function RootLayout({ children }: Props) {
	const language = await getLanguage()

	return (
		<html lang={language}>
			<body className={`${font.className} antialiased square-bg`}>
				<ClientLayout>
					<MouseFollower />
					{children}
				</ClientLayout>
			</body>
		</html>
	)
}

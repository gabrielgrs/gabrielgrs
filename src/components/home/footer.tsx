import { texts } from '@/utils/texts'
import { Language } from '@/utils/texts/type'

export function Footer({ language }: { language: Language }) {
	const { footer, buyMeCoffee } = texts[language]

	return (
		<>
			<div className="flex items-center justify-center">
				<a className="text-xl animate-pulse" href="https://www.buymeacoffee.com/gabrielgrs" target="_blank">
					{buyMeCoffee} ~ {'<3'}
				</a>
			</div>
			<footer className="py-10 flex justify-center items-center text-sm">
				<p className="text-gray-500">
					{footer.start} <span className="text-foreground/70">gabrielgrs</span> {footer.end}
				</p>
			</footer>
		</>
	)
}

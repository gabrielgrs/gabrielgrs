import { Dot } from 'lucide-react'

export function Footer() {
	return (
		<>
			<div className="flex items-center justify-center">
				<a className="text-xl animate-pulse" href="https://www.buymeacoffee.com/gabrielgrs" target="_blank">
					Buy me a coffee ~ {'<3'}
				</a>
			</div>
			<footer className="py-10 flex justify-between items-center text-sm">
				<p className="text-gray-500">
					Made by <span className="text-foreground/70">gabrielgrs</span> with love
				</p>
				<ul className="flex items-center gap-1 text-gray-500">
					<li>
						<a className="underline underline-offset-4">cv</a>
					</li>
					<Dot size={12} />
					<li className="underline underline-offset-4">
						<a>github</a>
					</li>
					<Dot size={12} />
					<li className="underline underline-offset-4">
						<a>linkedin</a>
					</li>
				</ul>
			</footer>
		</>
	)
}

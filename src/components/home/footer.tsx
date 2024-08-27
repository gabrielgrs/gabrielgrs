import { Dot } from 'lucide-react'

export function Footer() {
	return (
		<footer className="py-10">
			<div className="flex justify-between gap-4">
				<span>gabrielgrs.</span>
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
			</div>

			<br />

			<div className="flex justify-between gap-4">
				<p className="text-gray-500 self-end">
					Made by <span className="text-primary">Gabriel</span> with love
				</p>
				<ul>
					<li className="pb-2">
						<span className="font-semibold">Actions</span>
					</li>
					<li>
						<a href="#" className="text-gray-500">
							Back to top
						</a>
					</li>
					<li>
						<a href="#" className="text-gray-500">
							About
						</a>
					</li>
					<li>
						<a href="#" className="text-gray-500">
							Work
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

'use server'

import { NextResponse } from 'next/server'
import puppeteer from 'puppeteer'

export async function GET() {
	try {
		const browser = await puppeteer.launch({
			headless: 'shell',
			args: ['--no-sandbox', '--disable-setuid-sandbox'],
		})

		const page = await browser.newPage()

		await page.setViewport({ width: 1200, height: 800 })

		await page.goto(`${process.env.VERCEL_URL || 'http://localhost:3000'}/resume`, {
			waitUntil: 'networkidle0',
		})

		const pdf = await page.pdf({
			format: 'A4',
			printBackground: true,
		})

		await browser.close()

		return new NextResponse(pdf, {
			headers: {
				'Content-Type': 'application/pdf',
				'Content-Disposition': 'attachment; filename=resume.pdf',
			},
		})
	} catch (error) {
		console.error('PDF generation failed:', error)
		return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 })
	}
}

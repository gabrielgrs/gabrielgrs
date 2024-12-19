import chromium from 'chrome-aws-lambda'
import { NextResponse } from 'next/server'
import puppeteer from 'puppeteer-core'

export async function GET() {
	try {
		// Launch Chrome using chrome-aws-lambda
		const browser = await puppeteer.launch({
			args: chromium.args,
			defaultViewport: chromium.defaultViewport,
			executablePath: await chromium.executablePath,
			headless: true,
		})

		const page = await browser.newPage()

		// Set viewport for PDF generation
		await page.setViewport({ width: 1200, height: 800 })

		// Navigate to the resume page
		await page.goto(`${process.env.VERCEL_URL || 'http://localhost:3000'}/resume`, {
			waitUntil: 'networkidle0',
		})

		// Generate PDF
		const pdf = await page.pdf({
			format: 'A4',
			printBackground: true,
		})

		await browser.close()

		// Return PDF as response
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

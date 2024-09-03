'use server'

import fs from 'fs'
import puppeteer from 'puppeteer'

export async function downloadPdfFromUrl(url: string) {
	const browser = await puppeteer.launch({ headless: 'shell' })
	const page = await browser.newPage()
	await page.goto(url, { waitUntil: 'networkidle0' })
	await page.pdf({ path: './resume.pdf', format: 'A4' })
	await browser.close()
	const file = fs.readFileSync('./resume.pdf')
	const base64 = Buffer.from(file).toString('base64')
	return base64
}

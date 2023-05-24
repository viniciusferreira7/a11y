import React from 'react'
import './globals.css'
import { Roboto } from 'next/font/google'
import { Metadata } from 'next'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'A11y',
  description: 'Learn more about accessibility',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}

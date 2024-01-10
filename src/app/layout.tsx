import Head from 'next/head'
import { ReactNode } from 'react';
import './globals.css'

export const metadata = {
  title: 'Toms Burgmanis',
  description: 'An instagram influencer',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="google-site-verification" content="w0hBFWfqjwue5HYennSL7600SgjOCmiJLXT2w8vTlEQ" />
      </Head>
      <body>{children}</body>
    </html>
  )
}

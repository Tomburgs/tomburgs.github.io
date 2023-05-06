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
      <body>{children}</body>
    </html>
  )
}

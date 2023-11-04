import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Simple todoApp',
  description: 'Simple todoApp next14',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="jp">
      <body>{children}</body>
    </html>
  )
}

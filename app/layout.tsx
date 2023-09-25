import './globals.css'
import { metadata } from '../util/index'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

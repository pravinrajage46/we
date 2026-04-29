import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ROBOX LAB | Intelligent Robotics & AI Innovation',
  description: 'Building intelligent machines for tomorrow. Premium robotics research, autonomous systems, and AI-powered innovation.',
  keywords: 'robotics, AI, autonomous systems, machine learning, innovation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

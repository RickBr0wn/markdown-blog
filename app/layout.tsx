import './globals.css'
import { Inter } from 'next/font/google'
import { cn } from '~/lib/utils'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

type RootLayoutProps = { children: React.ReactNode }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}

// Path: app/layout.tsx
// Created at: 10:26:49 - 17/03/2024
// Language: Typescript
// Framework: React/Next.js

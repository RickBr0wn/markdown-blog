import Link from 'next/link'
import { DarkModeToggle } from '../dark-mode-toggle'
import LoginForm from './login-form'

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center">
      <div className="group">
        <Link href={'/'} className="text-2xl font-bold">
          Daily Blog
        </Link>
        <div className="h-1 w-0 group-hover:w-full transition-all bg-green-500" />
      </div>
      <div className="flex gap-2">
        <LoginForm />
        <DarkModeToggle />
      </div>
    </nav>
  )
}

// Path: components/nav/page.tsx
// Created at: 10:36:35 - 17/03/2024
// Language: Typescript
// Framework: React/Next.js

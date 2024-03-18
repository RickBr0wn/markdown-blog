'use client'

import { SiGithub } from 'react-icons/si'
import { Button } from '../ui/button'
import { createBrowserClient } from '@supabase/ssr'
import { usePathname } from 'next/navigation'

export default function LoginForm() {
  const pathname = usePathname()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  )

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: location.origin + '/auth/callback?next=' + pathname,
      },
    })
  }

  return (
    <Button
      onClick={handleLogin}
      variant={'outline'}
      className="flex items-center gap-2"
    >
      <SiGithub />
      LOGIN
    </Button>
  )
}

// Path: components/nav/login-form.tsx
// Created at: 11:05:32 - 17/03/2024
// Language: Typescript
// Framework: React/Next.js

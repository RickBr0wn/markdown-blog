import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  /**
   * 
   * supabase.auth.getUser() returns: 
   * {
      user: {
        id: 'cb654d48-787b-417f-b263-045773c60fb5',
        aud: 'authenticated',
        role: 'authenticated',
        email: 'ricky.brown.00@gmail.com',
        email_confirmed_at: '2024-03-18T13:46:22.363749Z',
        phone: '',
        confirmed_at: '2024-03-18T13:46:22.363749Z',
        last_sign_in_at: '2024-03-18T13:46:24.457711Z',
        app_metadata: { provider: 'github', providers: ['github'] },
        user_metadata: {
          avatar_url: 'https://avatars.githubusercontent.com/u/21251695?v=4',
          email: 'ricky.brown.00@gmail.com',
          email_verified: true,
          full_name: 'Rick Brown',
          iss: 'https://api.github.com',
          name: 'Rick Brown',
          phone_verified: false,
          preferred_username: 'RickBr0wn',
          provider_id: '21251695',
          sub: '21251695',
          user_name: 'RickBr0wn',
        },
        identities: [
          {
            identity_id: 'da597179-ad76-426b-ae81-39cbe848bae7',
            id: '21251695',
            user_id: 'cb654d48-787b-417f-b263-045773c60fb5',
            identity_data: {
              avatar_url: 'https://avatars.githubusercontent.com/u/21251695?v=4',
              email: 'ricky.brown.00@gmail.com',
              email_verified: true,
              full_name: 'Rick Brown',
              iss: 'https://api.github.com',
              name: 'Rick Brown',
              phone_verified: false,
              preferred_username: 'RickBr0wn',
              provider_id: '21251695',
              sub: '21251695',
              user_name: 'RickBr0wn',
            },
            provider: 'github',
            last_sign_in_at: '2024-03-18T13:46:22.359284Z',
            created_at: '2024-03-18T13:46:22.359343Z',
            updated_at: '2024-03-18T13:46:22.359343Z',
            email: 'ricky.brown.00@gmail.com',
          },
        ],
        created_at: '2024-03-18T13:46:22.354697Z',
        updated_at: '2024-03-18T13:46:24.45995Z',
        is_anonymous: false,
      },
    }
    */
  const { data } = await supabase.auth.getUser()

  console.log(
    'supabase.auth.getUser():',
    data,
    ' ** ~/middleware.ts - 59 ** server side'
  )

  return response
}

// Path: utils/supabase/middleware.ts
// Created at: 13:39:13 - 18/03/2024
// Language: Typescript
// Framework: React/Next.js

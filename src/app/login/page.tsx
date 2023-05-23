import { Metadata } from 'next'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { LoginButton } from '@/components/LoginButton'
import { auth } from '@/lib/auth'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Área de login',
}

export default async function Login() {
  const session = await getServerSession(auth)

  if (session) {
    redirect('/')
  }

  return (
    <main className="flex  flex-col items-center justify-center py-24 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
        Olá, bem vindo(a)
      </h1>

      <LoginButton
        title="Fazer login"
        className="rounded-lg border-2 border-black py-1 px-2 font-bold"
      />
    </main>
  )
}

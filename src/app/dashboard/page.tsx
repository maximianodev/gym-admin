import { Metadata } from 'next'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Área de login',
}

export default async function Dashboard() {
  const session = await getServerSession(auth)

  if (!session) {
    redirect('/')
  }

  return <></>
}

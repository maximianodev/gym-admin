import { Metadata } from 'next'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'

export const metadata: Metadata = {
  title: 'Home',
  description: '',
}

export default async function Home() {
  const session = await getServerSession(auth)

  if (!session) {
    redirect('/login')
  }

  return (
    <main className="">
      Home
    </main>
  )
}

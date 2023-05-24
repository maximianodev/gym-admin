import './globals.css'
import { Ubuntu } from 'next/font/google'
import { NextAuthProvider } from '@/providers/NextAuthProvider'
import { Layout } from '@/components/Layout'

const inter = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
})

export const metadata = {
  title: 'Admin Academia',
  description: 'Sistema administrativo da academia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  )
}

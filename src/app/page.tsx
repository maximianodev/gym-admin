import { Metadata } from "next";
import { Login } from "@/components/Login";

export const metadata: Metadata  = {
  title: 'Login',
  description: 'Área de login'
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
        Olá, bem vindo(a)
      </h1>

      <Login />
    </main>
  )
}

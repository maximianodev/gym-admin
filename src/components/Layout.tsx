import { Header } from './Header'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen container mx-auto px-4 md:px-8">
      <Header />

      {children}
    </div>
  )
}

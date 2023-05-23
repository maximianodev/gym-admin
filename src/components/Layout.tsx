import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-[url("/images/bg.jpg")] bg-cover bg-no-repeat bg-center bg-fixed min-h-screen'>
      <Header />

      <div className="p-2">
        <div className="p-2 bg-[#ffffffcf] rounded-lg backdrop-blur-sm">{children}</div>
      </div>

      <Footer />
    </div>
  )
}

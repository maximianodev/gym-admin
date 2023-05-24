import DashMenu from '@/components/DashMenu'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <DashMenu />
      <div className="border border-black p-2">{children}</div>
    </main>
  )
}

export default Layout

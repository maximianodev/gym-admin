import { Profile } from './Profile'

export const Header = () => {
  return (
    <header className="py-3 p-4 sticky top-0 flex items-center justify-between bg-black/60 backdrop-blur-sm text-white">
      <h1 className="font-bold text-lg">Academia</h1>
      <Profile />
    </header>
  )
}

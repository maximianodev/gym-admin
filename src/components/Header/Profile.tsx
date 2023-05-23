'use client'

import { useSession } from 'next-auth/react'
import { LogoutButton } from '@/components/LogoutButton'

export const Profile = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') return <>Carregando...</>
  if (status === 'unauthenticated' || !session) return <></>

  const { user } = session

  if (!user) return <></>

  const { name, image } = user

  return (
    <div className="border-white border-2 flex items-center rounded-md w-fit py-2 px-3">
      <img
        src={image ?? ''}
        alt={name ?? ''}
        width={'36px'}
        height={'36px'}
        className="rounded-full mr-3"
      />
      <div>
        <div className="font-bold text-sm">{name ?? ''}</div>
        <LogoutButton title="Sair" className="text-xs bg-red-600 py-1 px-2 rounded-sm font-bold" />
      </div>
    </div>
  )
}

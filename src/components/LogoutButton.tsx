'use client'

import { signOut } from 'next-auth/react'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface LogoutButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({ title, ...rest }) => {
  return (
    <button onClick={() => signOut()} {...rest}>
      {title}
    </button>
  )
}

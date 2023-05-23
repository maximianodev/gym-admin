'use client'

import { signIn } from 'next-auth/react'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface LoginButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string
}

export const LoginButton: React.FC<LoginButtonProps> = ({ title, ...rest }) => {
  return (
    <button type="button" onClick={() => signIn()} {...rest}>
      {title}
    </button>
  )
}

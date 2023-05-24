'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

const variants = {
  open: {
    opacity: 1,
    x: 0,
    height: 'auto',
    marginTop: '.65rem',
    marginBottom: '.65rem',
  },
  closed: {
    opacity: 0,
    x: '-100%',
    height: 0,
    marginTop: 0,
    marginBottom: 0
  },
}

const DashMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuOptions = [
    {
      label: 'Inicio',
      href: '/dashboard',
    },
    {
      label: 'Clientes',
      href: '/dashboard/users',
    },
    {
      label: 'Cadastro de cliente',
      href: '/dashboard/users/register',
    },
  ]

  return (
    <div>
      <button
        className="flex items-center border border-black px-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>

      <motion.nav
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        className="opacity-0 h-0 border border-black w-fit"
      >
        <ul className="flex flex-col">
          {menuOptions.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className="block p-2 border-black border-b last:border-b-0 leading-none"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </motion.nav>
    </div>
  )
}

export default DashMenu

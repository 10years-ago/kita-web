import React from 'react'

export type langVariant = string

interface navbarProps {
    lang:langVariant
}

const test = ['tailwind','javascript']

export const Navbar: React.FC<navbarProps> = ({ children, lang = "tailwind" }) => {
  return (
    <nav className='bg-gray-800'>

		</nav>
  )
}

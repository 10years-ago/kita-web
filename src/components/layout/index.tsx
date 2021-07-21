import React, { useState } from 'react'
import { Navbar, langVariant } from './navbar'

interface layoutProps {
  lang?: langVariant
  className?: string
}

export const Layout: React.FC<layoutProps> = ({ children, lang = 'tailwind', className}) => {
    return (
      <>
      <div className={`relative h-screen bg-gray-100 ${className || ''}`}>
        <Navbar lang={lang} />
        <main className='max-w-8xl mx-auto'>
          {children}
        </main>
      </div>
      </>
    )
}
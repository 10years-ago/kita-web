import React, { useEffect, useState } from 'react'
import { Navbar, langVariant } from './navbar'

interface layoutProps {
  lang?: langVariant
  className?: string
}

export const Layout: React.FC<layoutProps> = ({ children, lang = 'tailwind', className}) => {
  const [signIn,setSignIn] = useState(false)
  useEffect(() => {
    console.log(signIn)
  },[signIn])
    return (
      <>
      <div className={`relative h-screen bg-gray-100 ${className || ''}`}>
        <Navbar lang={lang} signIn={signIn} setSignIn={ setSignIn }/>
        <main className='max-w-8xl mx-auto'>
          {children}
        </main>
      </div>
      </>
    )
}
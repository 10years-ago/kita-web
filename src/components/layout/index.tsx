import React, { useEffect, useState } from 'react'
import { Navbar, langVariant } from './navbar'
import { SignIn } from './signIn'

interface layoutProps {
  lang: langVariant
  className?: string
}

export const Layout: React.FC<layoutProps> = ({ children, lang = 'tailwind', className}) => {
  const [signIn,setSignIn] = useState(false)
  useEffect(() => {
    console.log(signIn)
  },[signIn])
    return (
      <>
      <div className={`relative ${className}`}>
        <Navbar lang={lang} signIn={signIn} setSignIn={ setSignIn }/>
        <SignIn />
        {children}
      </div>
      </>
    )
}
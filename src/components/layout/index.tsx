import React, { useState } from 'react'
import { Navbar, langVariant } from './navbar'

interface layoutProps {
  lang?: langVariant
  //这是layout整个屏幕的样式
  layoutClassName?: string
  //这是navbar下面main区域的样式
  mainClassName?: string
}

export const Layout: React.FC<layoutProps> = ({ children, lang = '', layoutClassName,mainClassName}) => {
    return (
      <>
      <div className={`relative h-screen bg-gray-100 ${layoutClassName || ''}`}>
        <Navbar lang={lang} />
        {/* <main className='max-w-8xl mx-auto'> */}
        <main className={`mx-auto ${mainClassName}`}>
          {children}
        </main>
      </div>
      </>
    )
}
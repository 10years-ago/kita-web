import React from 'react'
import { Navbar, langVariant } from './navbar'

interface layoutProps {
  lang?: langVariant
  //这是layout整个屏幕的样式
  layoutClassName?: string
  //这是navbar下面main区域的样式
  mainClassName?: string
  user?: any
}

export const Layout: React.FC<layoutProps> = ({
  children,
  lang = '',
  layoutClassName,
  mainClassName,
  user = {},
}) => {
  return (
    <>
      <div className={`relative h-screen ${layoutClassName || ''}`}>
        <Navbar lang={lang} user={user} />
        {/* <main className='max-w-8xl mx-auto'> */}
        <main className={`mx-auto h-main-height ${mainClassName || ''}`}>
          {children}
        </main>
      </div>
    </>
  )
}

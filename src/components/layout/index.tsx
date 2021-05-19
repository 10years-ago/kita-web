import React from 'react'
import { Navbar, langVariant } from './navbar'


interface layoutProps {
  lang: langVariant
}

export const Layout: React.FC<layoutProps> = ({ children, lang = 'tailwind'}) => {
    return (
      <>
        <Navbar lang={lang} />
        {/* <div className='bg-blue-700'>xxx</div> */}
      </>
    )
}
import React from 'react'
import { Avatar } from 'components/Avatar'
import { LayoutMenu } from './menu'
import { useRouter } from 'next/router'
import { useQuery } from 'urql'
import { loginVerification } from 'common/query/user'
import cookie from 'react-cookies'

export type langVariant = string

interface navbarProps {
    lang: langVariant
}

const test = ['tailwind','javascript']

export const Navbar: React.FC<navbarProps> = ({ lang = "tailwind" }) => {
  const router = useRouter()
  console.log(cookie.load('user'))
  const [result, reexecuteQuery] = useQuery({
  query: loginVerification,
  variables:{
    token: cookie.load('user') || ''
  }
  });
  const { data, fetching, error } = result;
  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <Avatar src='logo.jpg' type='square' className='h-9 w-32'/>
            <div className='items-baseline ml-10'>
              {
                test.map(( item, index) => {
                  return (
                    <a key={index} href="#" className={`${lang === item ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}  `}>{item}</a>
                  )
                })
              }
            </div>
          </div>
          {
            data?.userByToken && !fetching && (
              <LayoutMenu avatarUrl='kita.jpg'/> 
            )
          } 
          {
            !data?.userByToken && !fetching && (
              <a onClick={() => router.push('/login')} className='group border-l pl-6 border-gray-700 hover:text-teal-400 flex items-center text-white cursor-pointer hover:text-blue-400'>登录 →</a>
            )
          }
        </div>
      </div>
		</nav>
  )
}

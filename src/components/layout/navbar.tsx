import React from 'react'
import { Avatar } from 'components/Avatar'
import { LayoutMenu } from './menu'
import { useRouter } from 'next/router'
// import { useQuery } from 'urql'
// import { loginVerification } from 'common/query/user'
// import cookie from 'react-cookies'

export type langVariant = string

interface navbarProps {
  lang: langVariant
  user?: any
}

const test = ['tailwind', 'javascript']

export const Navbar: React.FC<navbarProps> = ({
  lang = 'tailwind',
  user = {},
}) => {
  const router = useRouter()
  // const [result, reexecuteQuery] = useQuery({
  //   query: loginVerification,
  //   variables: {
  //     token: cookie.load('user') || '',
  //   },
  // })
  // const { data, fetching, error } = result
  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div onClick={() => router.push('/')} className='cursor-pointer'>
              <Avatar src='logo.jpg' type='square' className='h-9 w-32' />
            </div>
            <div className='items-baseline ml-10'>
              {test.map((item, index) => {
                return (
                  <a
                    key={index}
                    href='#'
                    className={`${
                      lang === item
                        ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    }`}
                    onClick={() => router.push(`/${item}`)}
                  >
                    {item}
                  </a>
                )
              })}
            </div>
          </div>
          {user?.id && <LayoutMenu avatarUrl='kita.jpg' />}
          {!user?.id && (
            <a
              onClick={() => router.push('/login')}
              className='group border-l pl-6 border-gray-700 hover:text-teal-400 flex items-center text-white cursor-pointer hover:text-blue-400'
            >
              登录 →
            </a>
          )}
        </div>
      </div>
    </nav>
  )
}

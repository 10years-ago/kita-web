import { Avatar } from 'components/Avatar'
import { Layout } from 'components/layout'
import { Menu } from 'components/menu'
import React, { useState } from 'react'
import { useQuery } from 'urql'
import Link from 'next/link'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import { AddCode } from './components/addCode'
import { loginAndTailwind } from 'common/query/user'
import cookie from 'react-cookies'

export const Tailwind: React.FC = () => {
  const [titleId, setTitleId] = useState('')
  const [isAdd, setIsAdd] = useState(false)
  const [playground, setPlayground] = useState(false)
  const [result, reexecuteQuery] = useQuery({
    query: loginAndTailwind,
    variables: {
      token: cookie.load('user') || '',
      langName: 'tailwind',
      titleId: titleId,
      xxx: 123,
    },
  })
  const { data, fetching, error } = result
  let lang, user
  if (data?.userByToken) {
    user = data.userByToken
    lang = user?.lang
  }
  console.log(data)
  return (
    <Layout lang='tailwind'>
      <div className='flex relative h-full overflow-y-auto'>
        {/* 左边菜单栏 */}
        {lang && <Menu lang={lang} titleId={titleId} setTitleId={setTitleId} />}
        {/* 右边主要内容 */}
        <div className='flex-1 overflow-y-auto'>
          <div className='w-full max-w-4xl mx-auto'>
            {lang?.contents.map((item) => {
              return (
                <div key={item.id}>
                  <p className='font-bold text-3xl'>{item?.contentTitle}</p>
                  <p>{item?.content}</p>
                  <Highlight
                    {...defaultProps}
                    code={item?.code}
                    theme={theme}
                    language='jsx'
                  >
                    {({
                      className,
                      style,
                      tokens,
                      getLineProps,
                      getTokenProps,
                    }) => (
                      <pre
                        className={`${className} text-left my-4 mx-0 overflow-scroll p-2`}
                        style={style}
                      >
                        {tokens.map((line, i) => (
                          <div
                            className='table-row'
                            {...getLineProps({ line, key: i })}
                          >
                            <span className='table-cell text-right pr-4 opacity-50 select-none'>
                              {i + 1}
                            </span>
                            <div className='table-cell'>
                              {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                              ))}
                            </div>
                          </div>
                        ))}
                      </pre>
                    )}
                  </Highlight>
                  <div dangerouslySetInnerHTML={{ __html: item?.code }}></div>
                </div>
              )
            })}
            {!isAdd && (
              <button
                className='w-1/4 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline'
                type='button'
                onClick={() => setIsAdd(true)}
              >
                添加
              </button>
            )}
            {isAdd && <AddCode setIsAdd={setIsAdd} titleId={titleId} />}
          </div>
        </div>
        {/* playground按钮 */}
        <div className={`${!playground ? 'hidden' : 'absolute w-full h-full'}`}>
          <iframe
            src='https://play.tailwindcss.com/'
            className='w-full h-full'
          />
          <div onClick={() => setPlayground(false)}>
            <Avatar
              src='back.svg'
              type='circle'
              className='absolute w-12 h-12 right-8 top-16 border-4 border-transparent hover:bg-gray-300'
            />
          </div>
        </div>
        <div
          className={`${playground ? 'hidden' : ''}`}
          onClick={() => setPlayground(true)}
        >
          <Avatar
            src='code.svg'
            type='circle'
            className='absolute w-12 h-12 right-8 top-8 border-4 border-transparent hover:bg-gray-300'
          />
        </div>
        {!playground && (
          <Link href='https://tailwindcomponents.com/gradient-generator/'>
            <a target='_blank'>
              <Avatar
                src='color.svg'
                type='circle'
                className='absolute w-12 h-12 right-8 top-28 border-4 border-transparent hover:bg-gray-300'
              />
            </a>
          </Link>
        )}
      </div>
    </Layout>
  )
}

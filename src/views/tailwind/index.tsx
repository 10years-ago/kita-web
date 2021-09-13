import { getLangByLangName } from 'common/query/lang'
import { Avatar } from 'components/Avatar'
import { Layout } from 'components/layout'
import { Menu } from 'components/menu'
import React, { useState } from 'react'
import { useQuery } from 'urql'
import Link from 'next/link'

export const Tailwind: React.FC = () => {
  const [titleId, setTitleId] = useState('')
  const [code, setCode] = useState('')
  const [playground, setPlayground] = useState(false)
  const [result, reexecuteQuery] = useQuery({
    query: getLangByLangName,
    variables: {
      langName: 'tailwind',
      titleId
    }
  })
  const { data, fetching, error } = result;
  return (
    <Layout lang='tailwind'>
      <div className='flex relative h-full'>
        {/* 左边菜单栏 */}
        {
          data?.langByLangName && (<Menu lang={data.langByLangName} titleId={titleId} setTitleId={setTitleId} />)
        }
        {/* 右边主要内容 */}
        <div className='flex-1'>
          <div className='w-full max-w-4xl mx-auto'>
            {
              data?.langByLangName?.contents.map(item => {
                return (
                  <div key={item.id}>
                    <p className='font-bold text-3xl'>{item?.contentTitle}</p>
                    <p>{item?.content}</p>
                    <p>{item?.code}</p>
                    <input type="text" value={code} onInput={(e) => setCode(e.currentTarget.value)}/>
                    <div dangerouslySetInnerHTML={{ __html: code }}></div>
                  </div>
                )
              })
            }
          </div>
        </div>
        {/* playground按钮 */}
        <div className={`${!playground ? 'hidden' : 'absolute w-full h-full'}`}>
          <iframe src='https://play.tailwindcss.com/' className='w-full h-full'/> 
          <div onClick={() => setPlayground(false)}>
            <Avatar 
              src='kita.jpg' 
              type='circle' 
              className='absolute w-16 h-16 right-8 top-16'
            />
          </div>
        </div>
        <div className={`${playground ? 'hidden' : ''}`} onClick={() => setPlayground(true)}>
          <Avatar 
            src='kita.jpg' 
            type='circle' 
            className='absolute w-16 h-16 right-8 top-8'
          />
        </div>
        {
          !playground && (
            <Link href='https://tailwindcomponents.com/gradient-generator/'>
              <a target='_blank'>
                <Avatar 
                  src='kita.jpg' 
                  type='circle' 
                  className='absolute w-16 h-16 right-8 top-32'
                />
              </a>
            </Link>
          )
        }
      </div>
    </Layout>
  )
}
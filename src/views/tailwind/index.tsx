import { getLangByLangName } from 'common/query/lang';
import { Layout } from 'components/layout'
import { Menu } from 'components/menu'
import React, { useState } from 'react'
import { useQuery } from 'urql';

export const Tailwind: React.FC = () => {
  const [titleId, setTitleId] = useState('')
  const [result, reexecuteQuery] = useQuery({
    query: getLangByLangName,
    variables: {
      langName: 'tailwind',
      titleId
    }
  })
  const { data, fetching, error } = result;
  const abc = `
    <button
    data-modal-toggle="example"
    data-modal-action="open"
    class="bg-red-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-red-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2"
  >
    Click here
  </button>
  `
  return (
    <Layout lang='tailwind'>
      <div className='flex'>
        {
          data?.langByLangName && (<Menu lang={data.langByLangName} titleId={titleId} setTitleId={setTitleId} />)
        }
        <div className='flex-1'>
          {
            data?.langByLangName?.contents.map(item => {
              return (
                <div key={item.id}>
                  <div>{item.content}</div>
                  <div>{item.title}</div>
                  <div dangerouslySetInnerHTML={{ __html: abc }}></div>
                  {/* {item.code} */}
                </div>
              )
            })
          }
        </div>
      </div>
    </Layout>
  )
}
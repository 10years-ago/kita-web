import React, { useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import { addContentMutation } from 'common/mutation/contents/contents'
import { useMutation } from 'urql'

interface addCodeProps {
  setIsAdd: Function
  titleId: String
}

export const AddCode: React.FC<addCodeProps> = ({
  children,
  setIsAdd,
  titleId,
}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [code, setCode] = useState('')
  const [addContentTodoResult, addContentTodo] = useMutation(addContentMutation)
  const createContent = () => {
    const variables = {
      contentTitle: title,
      content,
      code,
      titleId,
    }
    addContentTodo({ variables })
      .then((res) => {
        console.log(res)
        if (res?.error) {
          console.log('发生了肾么事？')
        } else if (res?.data) {
          console.log('添加成功')
        }
        setIsAdd(false)
      })
      .catch((err) => {
        console.log(err)
        console.log('发生了肾么事？')
      })
  }
  return (
    <>
      <h1 className='mt-20 text-center font-bold text-3xl mb-1'>添加内容</h1>
      <hr />
      <form className='pt-6 pb-8 mb-4 bg-white rounded'>
        <div className='mb-2'>
          <label
            className='block mb-2 text-xl font-bold text-gray-700'
            htmlFor='title'
          >
            标题
          </label>
          <input
            className='w-full px-3 py-2 mb-3 text-xl leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500'
            id='title'
            type='text'
            value={title}
            placeholder='这里填入左边导航的二级标签'
            onInput={(e) => setTitle(e.currentTarget.value)}
          />
        </div>
        <div className='mb-4'>
          <label
            className='block mb-2 text-xl font-bold text-gray-700'
            htmlFor='content'
          >
            内容
          </label>
          <textarea
            className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500'
            id='content'
            placeholder='这里填入该组件的描述'
            value={content}
            onInput={(e) => setContent(e.currentTarget.value)}
          />
        </div>
        <div className='mb-4'>
          <label
            className='block mb-2 text-xl font-bold text-gray-700'
            htmlFor='content'
          >
            代码输入处
          </label>
          <textarea
            className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500'
            id='content'
            placeholder='这里填入该组件的描述'
            value={code}
            onInput={(e) => setCode(e.currentTarget.value)}
          />
        </div>
        <p className='block mb-2 text-xl font-bold text-gray-700'>显示代码</p>
        <Highlight {...defaultProps} code={code} theme={theme} language='jsx'>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} text-left my-4 mx-0 overflow-scroll p-2`}
              style={style}
            >
              {tokens.map((line, i) => (
                <div className='table-row' {...getLineProps({ line, key: i })}>
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
        <p className='block mb-2 text-xl font-bold text-gray-700'>显示区域</p>
        <div dangerouslySetInnerHTML={{ __html: code }}></div>
        <div className='mb-6 text-center flex justify-evenly'>
          <button
            className='w-1/4 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline'
            type='button'
            onClick={() => createContent()}
          >
            提交
          </button>
          <button
            className='w-1/4 px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline'
            type='button'
            onClick={() => setIsAdd(false)}
          >
            取消
          </button>
        </div>
      </form>
    </>
  )
}

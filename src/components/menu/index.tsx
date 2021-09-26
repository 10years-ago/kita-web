import React, { useState } from 'react'
import { Title } from './title'
import { useMutation } from 'urql'
import { addTitleMutation } from 'common/mutation/title/title'

interface menuProps {
  lang: any
  titleId: string
  setTitleId: Function
}

export const Menu: React.FC<menuProps> = ({ lang, titleId, setTitleId }) => {
  const [addTitleTodoResult, addTitleTodo] = useMutation(addTitleMutation)
  const [isAdd, setIsAdd] = useState(false)
  const [title, setTitle] = useState('')
  const createTitle = () => {
    const variables = {
      langId: lang.id,
      titleName: title,
    }
    addTitleTodo({ variables })
      .then((res) => {
        setTitle('')
        if (res?.error) {
          console.log('发生了肾么事？')
        } else if (res?.data) {
          console.log('添加成功')
        }
      })
      .catch((err) => {
        setTitle('')
        console.log(err)
        console.log('发生了肾么事？')
      })
  }
  return (
    <>
      <ul className='w-80'>
        {lang?.titles.map((title, index) => {
          return (
            <Title
              key={title.id}
              isClick={titleId ? titleId === title.id : index === 0}
              titleName={title.titleName}
              titleId={title.id}
              contents={lang.contents}
              setTitleId={setTitleId}
            />
          )
        })}
        <li className='text-center'>
          {isAdd && (
            <div className='relative h-10 input-component mb-5 empty w-4/5 mt-4 mx-auto'>
              <input
                id='name'
                type='text'
                name='name'
                className='h-full w-full border-gray-300 px-2 transition-all border-blue rounded-sm'
                value={title}
                onInput={(e) => setTitle(e.currentTarget.value)}
              />
              <label
                htmlFor='name'
                className='absolute left-2 transition-all bg-white px-1 menu_label'
              >
                title
              </label>
              <div className='flex justify-evenly mt-4'>
                <button
                  className='bg-blue-500 rounded-full font-bold text-white px-4 py-1 transition duration-300 ease-in-out mr-6 active:bg-blue-600 focus:outline-none w-1/2'
                  onClick={() => createTitle()}
                >
                  +
                </button>
                <button
                  className='bg-red-500 rounded-full font-bold text-white px-4 py-1 transition duration-300 ease-in-out mr-6 active:bg-blue-600 focus:outline-none w-1/2'
                  onClick={() => {
                    setTitle('')
                    setIsAdd(!isAdd)
                  }}
                >
                  -
                </button>
              </div>
            </div>
          )}
          {!isAdd && (
            <button
              className='bg-blue-500 rounded-full font-bold text-white px-4 py-1 transition duration-300 ease-in-out mr-6 active:bg-blue-600 focus:outline-none w-1/2'
              onClick={() => setIsAdd(!isAdd)}
            >
              +
            </button>
          )}
        </li>
        <style jsx global>
          {`
            .menu_label {
              top: 0%;
              transform: translateY(-50%);
              font-size: 11px;
              color: rgba(37, 99, 235, 1);
            }
            #name:not(:focus) + menu_label {
              color: rgba(70, 70, 70, 1);
            }
            #name {
              border-width: 1px;
            }
            #name:focus {
              outline: none;
              border-color: rgba(37, 99, 235, 1);
            }
            .empty input:not(:focus) + label {
              top: 50%;
              transform: translateY(-50%);
              font-size: 14px;
            }
          `}
        </style>
      </ul>
    </>
  )
}

import React from 'react'
import { Title } from './title'
import { useMutation } from 'urql';
import { addTitleMutation } from 'common/mutation/title/title';

interface menuProps {
  lang:any
  titleId: string
  setTitleId: Function
}

export const Menu: React.FC<menuProps> = ({ lang, titleId, setTitleId }) => {
  const [addTitleTodoResult, addTitleTodo] = useMutation(addTitleMutation)
  const createTitle = () => {
    const variables = {
      langId:lang.id,
      titleName:'kitazxc'
    }
    addTitleTodo({variables})
    .then(res => {
      if(res?.error) {
        console.log('发生了肾么事？')
      } else if(res?.data) {
        console.log('添加成功')
      }
    }).catch(err => {
      console.log('发生了肾么事？')
    })
  }
    return (
      <>
        <ul className='w-80'>
          {
            lang?.titles.map((title,index) => {
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
            })
          }
          <li className='text-center'>
            <button 
              className="bg-blue-500 rounded-full font-bold text-white px-4 py-1 transition duration-300 ease-in-out mr-6 active:bg-blue-600 focus:outline-none w-1/2"
              onClick={() => createTitle()}
            >+
            </button>
          </li>
        </ul>
      </>
    )
}
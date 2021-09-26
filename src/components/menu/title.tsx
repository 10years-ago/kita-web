import React from 'react'
import { Content } from './content'

interface titleProps {
  isClick: boolean
  titleName: string
  setTitleId: Function
  titleId: string
  contents: any[]
}

export const Title: React.FC<titleProps> = ({
  isClick,
  titleName,
  setTitleId,
  contents,
  titleId,
}) => {
  return (
    <li onClick={() => setTitleId(titleId)}>
      <div className='flex justify-between'>
        <h1
          className={`pl-5 font-semibold cursor-pointer ${
            isClick ? 'border-l-8 border-blue-500' : ''
          }`}
        >
          {titleName}
        </h1>
      </div>
      {isClick && <Content contents={contents} />}
    </li>
  )
}

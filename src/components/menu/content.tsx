import React from 'react'

interface contentProps {
  contents: any[]
}

export const Content: React.FC<contentProps> = ({ contents = [] }) => {
    return (
      <ul className='pl-10'>
        {
          contents.map(item => {
            return <li key={item.id}>{item.contentTitle}</li>
          })
        }
      </ul>
    );
}
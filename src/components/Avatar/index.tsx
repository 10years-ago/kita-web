import React from 'react'

interface avatarProps {
  src: string
  type: 'circle' | 'square'
  className?: string
}

export const Avatar: React.FC<avatarProps> = ({ ...variant }) => {
  return (
    <img
      src={variant.src}
      alt=''
      className={`${
        variant.type === 'circle'
          ? 'rounded-full object-cover object-top cursor-pointer'
          : ''
      } ${variant.className}`}
    />
  )
}

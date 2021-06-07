import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Avatar } from 'components/Avatar'

const profile = ['登录', '个人信息', '登出']

interface menuProps {
  avatarUrl: string
}


export const LayoutMenu: React.FC<menuProps> = ({ avatarUrl }) => {
    return (
      <>
      <Menu as="div" className="ml-3 relative">
        {({ open }) => (
          <>
            {/* <div> */}
              <Menu.Button as='div' className={`max-w-xs bg-gray-800 rounded-full flex items-center text-sm ${ open ? 'outline-none ring-2 ring-offset-2 ring-offset-gray-800 ring-white' : ''}`}>
                <Avatar src={avatarUrl} type='circle' className='h-8 w-8 rounded-full object-cover object-top cursor-pointer'/>
              </Menu.Button>
            {/* </div> */}
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="origin-top-right absolute -left-20 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                {profile.map((item) => (
                  <Menu.Item key={item}>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
                      >
                        {item}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
      </>
    );
}
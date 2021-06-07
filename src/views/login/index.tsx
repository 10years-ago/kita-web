import React from 'react'
import { Layout } from 'components/layout';
import { Avatar } from 'components/Avatar';

interface indexProps {

}

export const Login: React.FC<indexProps> = () => {
    return (
      <>
        <Layout>
          <div className=' max-w-4xl mx-auto flex mt-56 '>
            <div className='flex-1 text-left'>
              <h1 className='text-5xl font-semibold'>欢迎来到kita的小屋</h1>
              <div className='flex justify-around mt-5'>
                <div className='flex'>
                  <Avatar src='/login/tailwind.png' type='square' className='h-6 w-6 mt-1 mr-1'/>
                  <p className='font-semibold text-2xl'>tailwindcss</p>
                </div>
                <div className='flex'>
                  <Avatar src='/login/javascript.png' type='square' className='h-6 w-6 mt-1 mr-1'/>
                  <p className='font-semibold text-2xl'>Javascript</p>
                </div>
              </div>
            </div>
            <div className='w-1/3'>
              <form action="">
                <div className='bg-white rounded-xl p-5 shadow-md flex flex-col h-auto'>
                  <label htmlFor="username">用户名</label>
                  <input type="text" name="username" id="username" className='rounded border-gray-300 border h-10 p-3 my-2 :focus:shadow-md ' />
                  <label htmlFor="email">邮箱</label>
                  <input type="email" name="password" id="email" className='rounded border-gray-300 border h-10 p-3 my-2'/>
                  <label htmlFor="password">密码</label>
                  <input type="text" name="password" id="password" className='rounded border-gray-300 border h-10 p-3 my-2'/>
                  <button type='submit' className='w-full bg-blue-500 text-white h-10 rounded mt-4'>注册</button>
                  <button type='button' className='w-full bg-blue-500 text-white h-10 rounded mt-4'>登录</button>
                </div>
              </form>
            </div>
          </div>
        </Layout>
      </>
    );
}
import React from 'react'
import { Layout } from 'components/layout';

interface indexProps {

}

export const Login: React.FC<indexProps> = () => {
    return (
      <>
        <Layout>
          <div className=' max-w-4xl mx-auto flex mt-12 '>
            <div className='flex-1 text-center'>欢迎来到kita的小屋</div>
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
                </div>
              </form>
            </div>
          </div>
        </Layout>
      </>
    );
}
import React, { useState } from 'react'
import { Layout } from 'components/layout';
import { Avatar } from 'components/Avatar';
import { useMutation } from 'urql';

interface indexProps {

}

const registerMutation = `
  mutation ($variables: UserRegisterInput!) {
    register (variables:$variables) {
      id
      name
    }
  }
`;

export const Login: React.FC<indexProps> = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [paw,setPaw] = useState('')
  const [registerTodoResult, registerTodo] = useMutation(registerMutation);

  const register = () => {
    const variables = {
      name,
      email,
      password:paw
    }
    registerTodo({variables}).then(res => {
      console.log(res)
    })
  }
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
              <form>
                <div className='bg-white rounded-xl p-5 shadow-md flex flex-col h-auto'>
                  <label htmlFor="name">用户名</label>
                  <input 
                    type="text" 
                    value={name} 
                    name="name" 
                    id="name" 
                    className='rounded border-gray-300 border h-10 p-3 my-2 :focus:shadow-md '
                    onChange={(e) => setName(e.target.value)}
                    />
                  <label htmlFor="email">邮箱</label>
                  <input 
                    type="email" 
                    name="password" 
                    id="email" 
                    className='rounded border-gray-300 border h-10 p-3 my-2' 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                  <label htmlFor="password">密码</label>
                  <input 
                    type="text" 
                    name="password" 
                    id="password" 
                    className='rounded border-gray-300 border h-10 p-3 my-2'
                    onChange={(e) => setPaw(e.target.value)}
                    />
                  <button type='button' className='w-full bg-blue-500 text-white h-10 rounded mt-4' onClick={() => register()}>注册</button>
                  <button type='button' className='w-full bg-blue-500 text-white h-10 rounded mt-4'>登录</button>
                </div>
              </form>
            </div>
          </div>
        </Layout>
      </>
    );
}
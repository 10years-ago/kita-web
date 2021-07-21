import React, { useState } from 'react'
import { Layout } from 'components/layout';
import { Avatar } from 'components/Avatar';
import { useMutation } from 'urql';
import { useRouter } from 'next/router'
import cookie from 'react-cookies'
import { getPINMutation, registerMutation,loginMutation } from 'common/mutation/user/user';

interface indexProps {

}

export const Login: React.FC<indexProps> = () => {
  const router = useRouter()
  const [isRegister, setIsRegister] = useState(true)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [pin,setPin] = useState('')
  const [paw,setPaw] = useState('')
  // 验证是否正确
  const [isCheck,setIsCheck] = useState([true,true,true])
  const [registerTodoResult, registerTodo] = useMutation(registerMutation)
  const [getPINTodoResult, getPINTodo] = useMutation(getPINMutation)
  const [loginTodoTodoResult, loginTodo] = useMutation(loginMutation)
  const emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/

  const register = () => {
    const variables = {
      name,
      email,
      password:paw,
      pin
    }
    registerTodo({variables})
    .then(res => {
      if(res?.error) {
        console.log('发生了肾么事？')
      } else if(res?.data) {
        console.log('注册成功')
      }
    }).catch(err => {
      console.log('发生了肾么事？')
    })
  }

  const login = () => {
    loginTodo({email, password:paw})
    .then(res => {
      if(res?.data?.login) {
        cookie.save('user',res?.data?.login?.token,{
          expire:new Date(res?.data?.login?.tokenAt)
        })
        router.push('/')
      } else {
        console.log('邮箱或密码错误')
      }
    })
    .catch(err => {
      console.log('发生了肾么事？')
    })
  }
  const PIN = (email) => {
    getPINTodo({email})
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log('发生了肾么事？')
    })
  }
    return (
      <>
        <Layout>
          <div className='max-w-4xl mx-auto flex mt-56 '>
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
              {
                isRegister && (
                  <form>
                    <div className='bg-white rounded-xl p-5 shadow-md flex flex-col h-auto'>
                      <div className='pb-3 flex flex-col'>
                        <label htmlFor="name">用户名</label>
                        <input 
                          type="text" 
                          value={name} 
                          name="name" 
                          id="name" 
                          className={`rounded border h-10 p-3 my-2 ${isCheck[0] ? 'border-gray-300' : 'border-red-500 rounde'}`}
                          onChange={(e) => setName(e.target.value.trim())}
                          onBlur={(e) => {
                            if(e.target.value.trim() === '' || e.target.value.length > 32) {
                              setIsCheck([false,isCheck[1],isCheck[2]])
                            } else {
                              setIsCheck([true,isCheck[1],isCheck[2]])
                            }
                          }}
                        />
                        {
                          !isCheck[0] && (
                            <p className='text-red-600'>用户名不能为空或超过32个字符</p>
                          )
                        }
                      </div>
                      <div className='pb-3 flex flex-col'>
                        <label htmlFor="email">邮箱</label>
                        <input 
                          type="email" 
                          name="email" 
                          id="email" 
                          className={`rounded border h-10 p-3 my-2 ${isCheck[1] ? 'border-gray-300' : 'border-red-500 rounde'}`}
                          onChange={(e) => setEmail(e.target.value)}
                          onBlur={(e) => {
                            if(e.target.value.trim() === '' || !emailReg.test(e.target.value)) {
                              setIsCheck([isCheck[0],false,isCheck[2]])
                            } else {
                              setIsCheck([isCheck[0],true,isCheck[2]])
                            }
                          }}
                        />
                        {
                          !isCheck[1] && (
                            <p className='text-red-600'>邮箱格式不正确</p>
                          )
                        }
                        <div className='flex'>
                          <input 
                            type="text" 
                            maxLength={6} 
                            className='rounded border h-10 p-3 my-2 border-gray-300 mr-2 w-36' 
                            value={pin}
                            onChange={e => setPin(e.target.value)}
                            />
                          <button 
                            type='button' 
                            className='w-full bg-blue-500 text-white h-10 rounded mt-2'
                            onClick={() => PIN(email)}
                          >获取验证码</button>
                        </div>
                      </div>
                      <div className='pb-3 flex flex-col'>
                        <label htmlFor="password">密码</label>
                        <input 
                          type="text" 
                          name="password" 
                          id="password" 
                          className={`rounded border h-10 p-3 my-2 ${isCheck[2] ? 'border-gray-300' : 'border-red-500 rounde'}`}
                          onChange={(e) => setPaw(e.target.value)}
                          onBlur={(e) => {
                            if(e.target.value.trim() === '' || e.target.value.length > 23 || e.target.value.length < 6) {
                              setIsCheck([isCheck[0],isCheck[1],false])
                            } else {
                              setIsCheck([isCheck[0],isCheck[1],true])
                            }
                          }}
                        />
                        {
                          !isCheck[2] && (
                            <p className='text-red-600'>密码请设置在6-23位之间</p>
                          )
                        }
                      </div>
                      <button type='button' className='w-full bg-blue-500 text-white h-10 rounded mt-4' onClick={() => register()}>注册</button>
                    </div>
                  </form>
                )
              }
              {
                !isRegister && (
                  <form action="">
                    <div className='bg-white rounded-xl p-5 shadow-md flex flex-col h-auto'>
                      <div className='pb-3 flex flex-col'>
                        <label htmlFor="email">邮箱</label>
                        <input 
                          type="email" 
                          name="email" 
                          id="email" 
                          className={`rounded border h-10 p-3 my-2 ${isCheck[1] ? 'border-gray-300' : 'border-red-500 rounde'}`}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {
                          !isCheck[1] && (
                            <p className='text-red-600'>邮箱格式不正确</p>
                          )
                        }
                      </div>
                      <div className='pb-3 flex flex-col'>
                        <label htmlFor="password">密码</label>
                        <input 
                          type="text" 
                          name="password" 
                          id="password" 
                          className={`rounded border h-10 p-3 my-2 ${isCheck[2] ? 'border-gray-300' : 'border-red-500 rounde'}`}
                          onChange={(e) => setPaw(e.target.value)}
                        />
                      </div>
                      <button 
                        type='button' 
                        className='w-full bg-blue-500 text-white h-10 rounded mt-4' 
                        onClick={() => login()}
                        >
                        登录
                      </button>
                    </div>
                  </form>
                )
              }
              <button 
                type='button' 
                className='w-full bg-blue-500 text-white h-10 rounded mt-4'
                onClick={() => {
                  setIsRegister(!isRegister)
                }}
              >
                {isRegister ? '登录' : '注册'}
              </button>
            </div>
          </div>
        </Layout>
      </>
    );
}

import axios from 'axios';
import React, { useState } from 'react';
const { VITE_API_URL } = import.meta.env;
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import ResModal from './Form-Modal/ResModal';

const Login = ({ changeForm }: any) => {
  const navigate = useNavigate();
  const instance = axios.create({
    baseURL: VITE_API_URL,
  });
  const [login, setLogin] = useState({ username: '', password: '' });
  const [modal, setModal] = useState(false);

  async function submitForm(e: any) {
    e.preventDefault();
    const res = await instance.post('/user/login-user', {
      username: login.username,
      clientpassword: login.password,
    });

    Cookies.set('UserjwtToken', res.data.token);
    setModal(res.data.message);

    setTimeout(() => {
      setModal(false);
    }, 2000);

    if (res.data.message === 'Correct Details') {
      navigate('/main');
    } else return;
  }
  function loginInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLogin((data) => ({
      ...data,
      [name]: value,
    }));
  }

  return (
    <>
      {modal !== false ? <ResModal responseMessage={modal} /> : ''}
      <div className='flex justify-center'>
        <div className='border border-neutral-300 rounded-md w-80 mt-20 bg-white'>
          <h1 className='text-center mt-10 text-2xl '>Login Here</h1>
          <form className='py-2' onSubmit={submitForm}>
            <div className='flex flex-col mx-auto w-fit'>
              <label className=' text-lg py-2 font-semibold'>Username</label>
              <input
                type='text'
                name='username'
                placeholder='Username'
                onChange={loginInput}
                className='p-2 rounded-md text-black border border-neutral-300 focus:outline-none'
                required
              />
            </div>
            <div className='flex flex-col mx-auto w-fit'>
              <label className='text-lg py-2 pt-5 font-semibold'>
                Password
              </label>
              <input
                type='password'
                name='password'
                placeholder='Password'
                onChange={loginInput}
                className='p-2 rounded-md text-black border border-neutral-300 focus:outline-none'
                required
              />
            </div>
            <div className='flex flex-col mx-auto w-fit'>
              <input
                type='submit'
                value='Login'
                className='mt-10 text-xl cursor-pointer border-2 border-white p-3 rounded-lg font-semibold'
              />
              <p
                className='mt-5 cursor-pointer font-semibold'
                onClick={changeForm}
              >
                Not A User? Register Here.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

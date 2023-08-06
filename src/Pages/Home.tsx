import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import '../index.css';
const Home = () => {
  const [form, setForm] = useState('Register');

  const changeForm = () => {
    if (form === 'Register') {
      setForm('Login');
    } else {
      setForm('Register');
    }
  };

  return (
    <div className='otherBGColor'>
      <div className='flex justify-center p-10 border-b border-neutral-300 bg-white'>
        <img src='src/assets/images/logo.png' alt='' className='w-80' />
      </div>
      {form === 'Register' ? (
        <Login changeForm={changeForm} />
      ) : (
        <Register changeForm={changeForm} />
      )}
    </div>
  );
};

export default Home;

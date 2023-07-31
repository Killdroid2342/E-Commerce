import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

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
    <>
      <h1 className='text-center text-xl font-bold'>
        Sign-Up/Login To Use Website
      </h1>
      {form === 'Register' ? (
        <Login changeForm={changeForm} />
      ) : (
        <Register changeForm={changeForm} />
      )}
    </>
  );
};

export default Home;

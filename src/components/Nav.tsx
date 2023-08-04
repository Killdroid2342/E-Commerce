import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [dropdownNav, setDropdownNav] = useState(false);

  const navigate = useNavigate();

  const hover = () => {
    setDropdownNav(true);
  };

  const leave = () => {
    setDropdownNav(false);
  };
  return (
    <>
      <nav className='fixed top-0 left-0 right-0 z-50 flex p-2 justify-evenly bg-white border-b border-neutral-300'>
        <div>
          <img
            src='src/assets/images/logo.png'
            alt=''
            width='200px'
            className='p-5 cursor-pointer'
            onClick={() => navigate('/main')}
          />
        </div>
        <input
          type='search'
          name=''
          id=''
          placeholder='Search Item'
          className='text-black w-3/6 ml-10 pl-10 border border-neutral-300 bg-neutral-100 focus:border-none focus:outline-none'
        />
        <ul className='flex'>
          <li
            className='p-5 cursor-pointer relative'
            onMouseEnter={hover}
            onMouseLeave={leave}
          >
            Browse
            {dropdownNav && (
              <ul className='absolute bg-white p-2 mt-2 text-black'>
                <li
                  className='hover:bg-neutral-400 cursor-pointer'
                  onClick={() => navigate('/shoes')}
                >
                  Shoes
                </li>
                <li
                  className='hover:bg-neutral-400 cursor-pointer'
                  onClick={() => navigate('/Accessories')}
                >
                  Accessories
                </li>
                <li
                  className='hover:bg-neutral-400 cursor-pointer'
                  onClick={() => navigate('/Electronics')}
                >
                  Electronics
                </li>
              </ul>
            )}
          </li>
          <li className='p-5 ml-auto'>Account: {'1'}</li>
          <li className='p-5 cursor-pointer relative'>{`Basket: 🛒`}</li>
        </ul>
      </nav>
      <div className='pt-24'>
        <div className='flex justify-evenly bg-neutral-100 p-5 '>
          <p
            className='font-bold cursor-pointer'
            onClick={() => navigate('/shoes')}
          >
            Shoes
          </p>
          <p
            className='font-bold cursor-pointer'
            onClick={() => navigate('/Accessories')}
          >
            Accessories
          </p>
          <p
            className='font-bold cursor-pointer'
            onClick={() => navigate('/Electronics')}
          >
            Electronics
          </p>
        </div>
      </div>
    </>
  );
};

export default Nav;

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasketModal from './basketModal/BasketModal';
import { decodeToken } from 'react-jwt';
import Cookies from 'js-cookie';
const { VITE_API_URL } = import.meta.env;
import axios from 'axios';
import AccountInfo from './AccountInfo/AccountInfo';

const instance = axios.create({
  baseURL: VITE_API_URL,
});

interface AllItems {
  id: number;
  type: string;
  des: string;
  img: string;
  lowPrice: string;
  name: string;
  price: string;
}
const Nav = ({ basketItems, setBasketItems }: any) => {
  const [dropdownNav, setDropdownNav] = useState(false);
  const [basketModal, setBasketModal] = useState(false);
  const [accountInfo, setAccountinfo] = useState(false);
  const [clientUsername, setClientUsername] = useState('');
  const [allItems, setAllItems] = useState<AllItems[]>([]);
  const isLoggedIn = !!clientUsername;
  const navigate = useNavigate();

  const backToHome = () => {
    Cookies.remove('UserjwtToken');
    navigate('/');
  };
  const handleChange = async (e: any) => {
    const { value } = e.currentTarget;
    if (value) {
      const res = await instance.post('/items/search', {
        searchItem: value,
      });
      setAllItems(res.data);
    } else {
      setAllItems([]);
    }
  };

  const hover = () => {
    setDropdownNav(true);
  };

  const leave = () => {
    setDropdownNav(false);
  };

  const LogOut = () => {
    Cookies.remove('UserjwtToken');
    localStorage.removeItem('basketItems');
    navigate('/');
  };
  const OpenModal = () => {
    setBasketModal(!basketModal);
  };
  const openAccountInfo = () => {
    setAccountinfo(!accountInfo);
  };
  const usernameJWT = () => {
    const getJWT = Cookies.get('UserjwtToken');
    if (getJWT) {
      const decodedTokenUsername = (decodeToken(getJWT) as { username: string })
        .username;
      setClientUsername(decodedTokenUsername);
    } else return;
  };
  useEffect(() => {
    usernameJWT();
  });
  const deleteAccount = async () => {
    try {
      await instance.post('/user/delete-user', { username: clientUsername });
      backToHome();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <nav className='fixed top-0 left-0 right-0 z-50 flex p-2 justify-evenly bg-white border-b border-neutral-300'>
        <div>
          <img
            src='/assets/images/logo.png'
            alt=''
            width='200px'
            className='p-5 cursor-pointer'
            onClick={() => navigate('/main')}
          />
        </div>
        <div className='flex flex-col w-3/6'>
          <input
            type='search'
            name=''
            id=''
            placeholder='Search Item'
            className='text-black w-full pl-10 h-16 border border-neutral-300 bg-neutral-100 focus:outline-none'
            onChange={handleChange}
          />
          <div className='mt-4'>
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {allItems.map((item: any) => (
                <li
                  key={item.ID}
                  className='flex flex-col p-4 border rounded cursor-pointer hover:bg-gray-100 transition duration-300'
                  onClick={() => {
                    if (item.des === 'This is a Electronics') {
                      navigate('/Electronics');
                    } else if (item.des === 'This is a shoe') {
                      navigate('/shoes');
                    } else if (item.des === 'This is an accessories') {
                      navigate('/Accessories');
                    } else return;
                  }}
                >
                  <img
                    className='w-16 h-16 mb-2 mx-auto'
                    src={item.img}
                    alt={item.name}
                  />
                  <div className='text-center'>
                    <h3 className='text-lg font-semibold'>{item.name}</h3>
                    <p className='text-sm text-gray-600'>{item.des}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className='flex'>
          <li
            className='p-5 cursor-pointer relative'
            onMouseEnter={hover}
            onMouseLeave={leave}
          >
            Browse
            {dropdownNav && (
              <ul className='absolute bg-neutral-50 p-2 mt-2 text-black border border-black rounded-md'>
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
          {isLoggedIn ? (
            <>
              <li
                className='p-5 ml-auto cursor-pointer'
                onClick={openAccountInfo}
              >{`Account: ${clientUsername}`}</li>
              {accountInfo && (
                <AccountInfo
                  setAccountinfo={setAccountinfo}
                  clientUsername={clientUsername}
                />
              )}
              <li className='p-5 cursor-pointer relative' onClick={OpenModal}>
                {`Basket: 🛒`}
              </li>
              {basketModal && (
                <BasketModal
                  setBasketModal={setBasketModal}
                  basketItems={basketItems}
                  setBasketItems={setBasketItems}
                  basketModal={basketModal}
                />
              )}
              <li className='p-5 ml-auto cursor-pointer' onClick={LogOut}>
                Log Out
              </li>
              <li
                className='p-5 ml-auto cursor-pointer font-bold'
                onClick={deleteAccount}
              >
                Delete Account
              </li>
            </>
          ) : (
            <li
              className='p-5 ml-auto cursor-pointer'
              onClick={() => navigate('/')}
            >
              Sign Up
            </li>
          )}
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

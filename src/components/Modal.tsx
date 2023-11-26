import { decodeToken } from 'react-jwt';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
const Modal = ({ onClose, image, amount, add, remove, addBasket }: any) => {
  const [clientUsername, setClientUsername] = useState('');
  const isLoggedIn = !!clientUsername;

  const totalCost = 100 * amount;
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
  }, []);
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black'>
      <div className='bg-white p-4 rounded-lg'>
        <button
          className='mt-2 px-4 py-2 bg-gray-500 text-white rounded-lg'
          onClick={onClose}
        >
          X
        </button>
        <img src={image} alt='Modal' className='w-96' />
        {isLoggedIn ? (
          <>
            <h2 className='text-xl text-center'>Add To basket: £100</h2>
            <div className='flex flex-col'>
              <button
                className='border-2 border-red-300 p-2 rounded-md font-bold m-2'
                onClick={add}
              >
                {'+'}
              </button>
              <button
                className='border-2 border-red-300 p-2 rounded-md font-bold m-2'
                onClick={remove}
              >
                {'-'}
              </button>
              <button
                onClick={addBasket}
                className='border-2 border-red-300 p-2 rounded-md font-bold m-2'
              >
                Add To Basket
              </button>
            </div>
            <p>{`Cost: £${totalCost}`}</p>
          </>
        ) : (
          <p className='text-center font-bold text-lg'>
            To Buy This Item you need to make an account
          </p>
        )}
      </div>
    </div>
  );
};

export default Modal;

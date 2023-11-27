import { useEffect, useState } from 'react';
import Nav from '../components/nav/Nav';
import Cookies from 'js-cookie';
import { decodeToken } from 'react-jwt';
const { VITE_API_URL } = import.meta.env;
import axios from 'axios';
const instance = axios.create({
  baseURL: VITE_API_URL,
});
interface Items {
  img: string;
  des: string;
  lowPrice: string;
  price: string;
  name: string;
}

const PurchasedItems = () => {
  const initialBasketItems = localStorage.getItem('basketItems');
  const [basketItems, setBasketItems] = useState<Items[]>(
    initialBasketItems ? JSON.parse(initialBasketItems) : []
  );
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [clientUsername, setClientUsername] = useState('');

  const usernameJWT = () => {
    const getJWT = Cookies.get('UserjwtToken');
    if (getJWT) {
      const decodedTokenUsername = (decodeToken(getJWT) as { username: string })
        .username;
      setClientUsername(decodedTokenUsername);
    } else return;
  };
  const account = clientUsername;

  const getPurchasedItems = async () => {
    const res = await instance.get('/items/getPurchasedItems');

    const filteredItems = res.data.filter(
      (item: any) => item.account === account
    );
    setPurchasedItems(filteredItems);
  };

  useEffect(() => {
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
    getPurchasedItems();
    usernameJWT();
  }, [basketItems, usernameJWT]);

  return (
    <>
      <Nav basketItems={basketItems} setBasketItems={setBasketItems} />
      <h1 className='text-center text-3xl mt-5 mb-5'>Purchased items</h1>
      {purchasedItems.length === 0 ? (
        <p className='text-center font-bold'>
          No items bought for this account.
        </p>
      ) : (
        <>
          {purchasedItems.map((item: any, key: any) => (
            <div
              key={key}
              className='mb-4 p-4 border border-gray-300 rounded shadow-md'
            >
              <div className='flex flex-row items-center'>
                <div className='mr-4'>
                  <img src={item.shoe} alt='' className='w-40' />
                </div>
                <div>
                  <p className='text-lg font-bold'>{item.name}</p>
                  <p>Account: {item.account}</p>
                  <p>Amount: {item.amount}</p>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
            </div>
          ))}
          <div className='text-center'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded mb-10 mt-10'>
              Clear Purchase History
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default PurchasedItems;

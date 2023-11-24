import { useEffect, useState } from 'react';
import Nav from '../components/nav/Nav';
import Auth from '../hooks/Auth';

interface Items {
  img: string;
  des: string;
  lowPrice: string;
  price: string;
  name: string;
}

const PurchasedItems = () => {
  Auth();
  const initialBasketItems = localStorage.getItem('basketItems');
  const [basketItems, setBasketItems] = useState<Items[]>(
    initialBasketItems ? JSON.parse(initialBasketItems) : []
  );
  const [purchasedItems, setPurchasedItems] = useState([]);

  return (
    <>
      <Nav basketItems={basketItems} setBasketItems={setBasketItems} />
      <h1 className='text-center text-3xl mt-5 mb-5'>Purchased items</h1>
      {purchasedItems.length === 0 ? (
        <p className='text-center font-bold'>
          No items bought for this account.
        </p>
      ) : (
        purchasedItems.map((item: any, key: any) => (
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
        ))
      )}
    </>
  );
};

export default PurchasedItems;

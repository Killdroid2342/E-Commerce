import Auth from '../hooks/Auth';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  Auth();
  const navigate = useNavigate();
  const itemsString = localStorage.getItem('basketItems');
  let basketItems: any = [];

  if (itemsString !== null) {
    const items = JSON.parse(itemsString);
    Array.isArray(items);
    basketItems = items.map((item: any, index: any) => (
      <div key={index} className='border border-black p-4 mb-4'>
        <p className='text-xl font-semibold'>{item.name}</p>
        <p>Amount: {item.amount}</p>
        <p>Price: ${item.price}</p>
        <div>
          <img
            src={item.shoe}
            alt={item.name}
            className='w-32 h-32 object-contain mt-2'
          />
        </div>
      </div>
    ));
  } else {
    return null;
  }

  return (
    <div className='otherBGColor'>
      <div className='flex justify-center p-10 border-b border-neutral-300 bg-white'>
        <img src='src/assets/images/logo.png' alt='' className='w-80' />
      </div>
      <div className='p-8'>
        <h1 className='text-3xl font-semibold mb-4 text-center'>Checkout</h1>
        {basketItems.length === 0 ? (
          <p className='text-center'>
            You Have Nothing In Your Cart.{' '}
            <a className='font-bold'>Add Something</a>
          </p>
        ) : (
          basketItems
        )}
        <div className='flex flex-col justify-center'>
          <button
            onClick={() => navigate('/Payment')}
            className='border border-neutral-200 rounded-lg p-5 text-3xl font-bold'
          >
            Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

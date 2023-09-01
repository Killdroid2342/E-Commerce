import Auth from '../hooks/Auth';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  Auth();
  const itemsString = localStorage.getItem('basketItems');
  let basketItems: any[] = [];
  let totalPrice = 0;

  if (itemsString !== null) {
    const items = JSON.parse(itemsString);
    if (Array.isArray(items)) {
      basketItems = items;
      totalPrice = items.reduce((acc: any, item: any) => {
        return acc + item.price * item.amount;
      }, 0);
    }
  } else {
    return null;
  }
  const navigate = useNavigate();

  return (
    <div className='otherBGColor'>
      <div className='flex justify-center items-center py-8 bg-white'>
        <img
          src='src/assets/images/logo.png'
          alt=''
          className='w-60 cursor-pointer'
          onClick={() => navigate('/main')}
        />
      </div>
      <div className='p-8 max-w-xl mx-auto'>
        <h1 className='text-4xl font-semibold mb-8 text-center'>Checkout</h1>
        {basketItems.length === 0 ? (
          <div className='text-center'>
            <p className='text-lg mb-2'>Your cart is empty.</p>
            <a
              href='/main'
              className='text-indigo-500 hover:underline font-semibold'
            >
              Browse products
            </a>
          </div>
        ) : (
          <div className='space-y-4'>
            {basketItems.map((item: any, index: any) => (
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
            ))}
          </div>
        )}
        <p className='font-bold'>Total Price: £{totalPrice}</p>
        <div className='flex justify-center mt-8'>
          <button
            onClick={() => navigate('/Payment')}
            className='bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-700 text-white py-3 px-6 rounded-lg text-lg font-semibold'
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

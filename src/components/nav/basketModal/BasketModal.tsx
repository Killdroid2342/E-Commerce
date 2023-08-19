import { Item } from '../../../Pages/Shoes';
import { useNavigate, useLocation } from 'react-router-dom';

const BasketModal = ({ setBasketModal, basketItems, setBasketItems }: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  const closeModal = () => {
    setBasketModal(false);
  };
  console.log(basketItems);
  const removeItems = () => {
    localStorage.removeItem('basketItems');
    setBasketItems([]);
  };
  if (location.pathname === '/main') {
    return null;
  }
  return (
    <>
      <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black'>
        <div className='bg-white p-4 rounded-lg'>
          <button
            className='mt-2 px-4 py-2 bg-gray-500 text-white rounded-lg'
            onClick={closeModal}
          >
            X
          </button>
          <h2>{'Current Basket 🛒'}</h2>
          {basketItems?.map((item: Item, index: number) => (
            <div key={index} className='flex'>
              <img
                src={item.shoe}
                alt={`Item ${index}`}
                className='w-16 h-16'
              />
              <p className='border border-black p-2'>Amount: {item.amount}</p>
              <p className='border border-black p-2'>Price: £{item.price}</p>
              <p className='border border-black p-2'>Name: {item.name}</p>
            </div>
          ))}
          <div className='flex flex-row justify-between'>
            <button
              onClick={removeItems}
              className='mt-2 px-4 py-2 bg-gray-500 text-white rounded-lg'
            >
              Clear All Items
            </button>
            <button
              onClick={() => navigate('/Checkout')}
              className='mt-2 px-4 py-2 bg-gray-500 text-white rounded-lg'
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketModal;

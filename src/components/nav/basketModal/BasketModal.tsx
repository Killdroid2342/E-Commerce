import { Item } from '../../../Pages/Shoes';
import { useNavigate } from 'react-router-dom';

const BasketModal = ({ setBasketModal, basketItems, setBasketItems }: any) => {
  const navigate = useNavigate();

  const closeModal = () => {
    setBasketModal(false);
  };

  const removeItems = () => {
    localStorage.removeItem('basketItems');
    setBasketItems([]);
  };
  const totalPrice = basketItems
    ? basketItems.reduce((acc: any, item: any) => acc + item.price, 0)
    : 0;
  basketItems?.forEach((item: Item, index: number) => {
    console.log(`Item ${index + 1}:`, item);
  });
  console.log('Total Price:', totalPrice);
  return (
    <>
      <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black'>
        <div className='bg-white p-4 rounded-lg overflow-auto max-h-96'>
          <button
            className='mt-2 px-4 py-2 bg-gray-500 text-white rounded-lg'
            onClick={closeModal}
          >
            X
          </button>
          <h2 className='text-2xl font-semibold mb-4'>Current Basket 🛒</h2>
          <div className='grid gap-4'>
            {basketItems?.map((item: Item, index: number) => (
              <div key={index} className='flex border p-4'>
                <img
                  src={item.shoe}
                  alt={`Item ${index}`}
                  className='w-16 h-16 mr-4'
                />
                <div className='flex-grow'>
                  <p className='text-lg font-semibold'>{item.name}</p>
                  <p className='text-gray-600 mt-1'>Amount: {item.amount}</p>
                  <p className='text-gray-600'>Price: £{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <p className='font-bold'>Total Price: £{totalPrice}</p>
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

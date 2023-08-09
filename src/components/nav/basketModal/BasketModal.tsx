import { Item } from '../../../Pages/Shoes';

const BasketModal = ({ setBasketModal, basketItems }: any) => {
  const closeModal = () => {
    setBasketModal(false);
  };

  return (
    <div>
      <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black'>
        <div className='bg-white p-4 rounded-lg'>
          <button
            className='mt-2 px-4 py-2 bg-gray-500 text-white rounded-lg'
            onClick={closeModal}
          >
            X
          </button>
          <h2>{'Current Basket 🛒'}</h2>
          {basketItems.map((item: Item, index: number) => (
            <div key={index}>
              <img
                src={item.shoe}
                alt={`Item ${index}`}
                className='w-16 h-16'
              />
              <p>Amount: {item.amount}</p>
              <p>Price: £{item.price}</p>
              <p>Name: {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasketModal;

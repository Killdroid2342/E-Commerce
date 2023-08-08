const BasketModal = ({ setBasketModal }: any) => {
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
        </div>
      </div>
    </div>
  );
};

export default BasketModal;

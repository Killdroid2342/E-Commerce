import React from 'react';

const Modal = ({ onClose, image, amount, add, remove, shoe }: any) => {
  const totalCost = 100 * amount;

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
          <button className='border-2 border-red-300 p-2 rounded-md font-bold m-2'>
            Add To Basket
          </button>
        </div>
        <p>{`Cost: £${totalCost}`}</p>
      </div>
    </div>
  );
};

export default Modal;

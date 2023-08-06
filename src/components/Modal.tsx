import React from 'react';

const Modal = ({ onClose, image }: any) => {
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
        <div>
          <h2 className='text-xl'>Add To basket</h2>
          <button className='border-2 border-red-300 p-2 rounded-md font-bold m-2'>
            {'+1'}
          </button>
          <button className='border-2 border-red-300 p-2 rounded-md font-bold m-2'>
            {'-1'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

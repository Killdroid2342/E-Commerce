import React from 'react';

const ResModal = (props: any) => {
  return (
    <div className='flex justify-center items-center'>
      <p className='w-40 text-2xl text-black'>{props.responseMessage}</p>
    </div>
  );
};

export default ResModal;

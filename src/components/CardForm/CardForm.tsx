import { useState } from 'react';
import AddMoney from './AddMoney/AddMoney';

const CardForm = ({
  submitCard,
  cardInput,
  removeCard,
  clientUsername,
}: any) => {
  const [moneyModal, setMoneyModal] = useState(false);
  const openMoneyModal = () => {
    setMoneyModal(true);
  };

  return (
    <div className='flex flex-col items-center'>
      <form
        className='border border-red-900 p-2 md:p-4 lg:p-6 xl:p-8 rounded-md max-w-md w-full mx-auto'
        onSubmit={submitCard}
      >
        <div className='mb-2 flex flex-col'>
          <label>FullName:</label>
          <input
            type='text'
            placeholder='John Doe'
            maxLength={16}
            className='border border-neutral-500 focus:outline-none p-2 rounded-lg'
            name='FullName'
            onChange={cardInput}
          />
        </div>
        <div className='mb-2 flex flex-col'>
          <label>Card Number:</label>
          <input
            type='text'
            placeholder='1234 1234 1234 1234'
            maxLength={16}
            className='border border-neutral-500 focus:outline-none p-2 rounded-lg'
            name='CardNumber'
            onChange={cardInput}
          />
        </div>
        <div className='mb-2 flex flex-col'>
          <label>Expiration Date:</label>
          <input
            type='text'
            placeholder='10/25'
            maxLength={5}
            className='border border-neutral-500 focus:outline-none p-2 rounded-lg'
            name='ExpirationDate'
            onChange={cardInput}
          />
        </div>
        <div className='mb-2 flex flex-col'>
          <label>Security Code:</label>
          <input
            type='text'
            placeholder='123'
            maxLength={3}
            className='border border-neutral-500 focus:outline-none p-2 rounded-lg'
            name='SecurityCode'
            onChange={cardInput}
          />
        </div>
        <div className='mb-2 flex flex-col'>
          <label>Set Initial Money:</label>
          <input
            type='number'
            placeholder='£0'
            className='border border-neutral-500 focus:outline-none p-2 rounded-lg'
            name='Money'
            onChange={cardInput}
          />
        </div>
        <div className='max-sm:flex max-sm:flex-col flex flex-col'>
          <input
            type='submit'
            value='Create Card'
            className='bg-blue-500 text-white p-1 md:p-2 rounded-lg cursor-pointer hover:bg-blue-700 m-2'
          />
          <input
            onClick={removeCard}
            type='submit'
            value='Remove Card'
            className='bg-blue-500 text-white p-1 md:p-2 rounded-lg cursor-pointer hover:bg-blue-700 m-2'
          />

          <input
            onClick={openMoneyModal}
            type='button'
            value='Add More Money'
            className='bg-blue-500 text-white p-1 md:p-2 rounded-lg cursor-pointer hover:bg-blue-700 m-2'
          />
        </div>
      </form>
      {moneyModal && (
        <AddMoney
          setMoneyModal={setMoneyModal}
          moneyModal={moneyModal}
          clientUsername={clientUsername}
        />
      )}
    </div>
  );
};

export default CardForm;

import { useNavigate } from 'react-router-dom';

const AccountInfo = ({ setAccountinfo, clientUsername }: any) => {
  const navigate = useNavigate();

  const closeModal = () => {
    setAccountinfo(false);
  };

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black'>
      <div className='bg-white p-8 rounded-lg overflow-auto max-h-96 w-96'>
        <button
          className='absolute top-2 right-2 px-3 py-2 bg-gray-500 text-white rounded-lg'
          onClick={closeModal}
        >
          X
        </button>
        <h2 className='text-2xl font-semibold mb-4'>Account Information</h2>
        <div className='grid gap-4'>
          <p className='font-bold'>Account Name: {clientUsername}</p>
          <p>Balance: </p>
          <p>Card Number: </p>
          <p>Expiration Date: </p>
          <p>Security Code: </p>
          <p>
            No card? Click{' '}
            <span
              onClick={() => navigate('/CreateCard')}
              className='text-blue-500 cursor-pointer'
            >
              Here
            </span>{' '}
            to create a card.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;

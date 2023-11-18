import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const { VITE_API_URL } = import.meta.env;
interface Account {
  account: string;
  Money: string;
  CardNumber: string;
  ExpirationDate: string;
  SecurityCode: string;
  FullName: string;
}
const AccountInfo = ({ setAccountinfo, clientUsername }: any) => {
  const [accountInfo, setAccountInfo] = useState<Account[]>([]);
  console.log(accountInfo);
  const instance = axios.create({
    baseURL: VITE_API_URL,
  });

  const navigate = useNavigate();

  const closeModal = () => {
    setAccountinfo(false);
  };
  async function getAccountInfo() {
    const res = await instance.get('/card/accountInfo');
    setAccountInfo(res.data);
  }
  useEffect(() => {
    getAccountInfo();
  }, []);
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black'>
      <div className='bg-white p-8 rounded-lg overflow-auto max-h-96 w-96'>
        <button
          className='p-2 px-3 bg-gray-500 text-white rounded-lg'
          onClick={closeModal}
        >
          X
        </button>
        <h2 className='text-2xl font-semibold mb-4'>Account Information</h2>
        <div className='grid gap-4'>
          {accountInfo.map((account) => {
            if (clientUsername === account.account) {
              return (
                <div key={account.account}>
                  <p className='font-bold'>Account Name: {clientUsername}</p>
                  <p>Full Name: {account.FullName}</p>
                  <p>{`Balance: £${account.Money}`}</p>
                  <p>Card Number: {account.CardNumber}</p>
                  <p>Expiration Date: {account.ExpirationDate}</p>
                  <p>Security Code: {account.SecurityCode}</p>
                  <div className='flex flex-row'>
                    <p>
                      View Your Card{' '}
                      <span
                        onClick={() => navigate('/CreateCard')}
                        className='text-blue-500 cursor-pointer'
                      >
                        Here
                      </span>
                    </p>
                    <p>
                      Purchased items{' '}
                      <span
                        onClick={() => navigate('/CreateCard')}
                        className='text-blue-500 cursor-pointer'
                      >
                        Here
                      </span>
                    </p>
                  </div>
                </div>
              );
            }
            return (
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;

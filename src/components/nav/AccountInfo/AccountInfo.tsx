import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const { VITE_API_URL } = import.meta.env;
interface Account {
  account: string;
  money: number;
  CardNumber: string;
  ExpirationDate: string;
  SecurityCode: string;
  FullName: string;
}
const AccountInfo = ({
  setAccountinfomodal,
  clientUsername,
  LogOut,
  deleteAccount,
}: any) => {
  const [accountInfo, setAccountInfo] = useState<Account[]>([]);
  const instance = axios.create({
    baseURL: VITE_API_URL,
  });

  const navigate = useNavigate();

  const closeModal = () => {
    setAccountinfomodal(false);
  };

  useEffect(() => {
    const getAccountInfo = async () => {
      try {
        const res = await instance.get('/card/accountInfo', {
          params: { username: clientUsername },
        });
        const filteredData = res.data;
        setAccountInfo(filteredData);
      } catch (error) {
        console.log('Error fetching account information:', error);
      }
    };
    getAccountInfo();
  }, []);

  const filteredAccountInfo = accountInfo.filter(
    (account) => account.account === clientUsername
  );
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
          {filteredAccountInfo.map((account) => (
            <div key={account.account}>
              <p className='font-bold'>Account Name: {account.account}</p>
              <p>Full Name: {account.FullName}</p>
              <p>{`Balance: £${account.money}`}</p>
              <p>Card Number: {account.CardNumber}</p>
              <p>Expiration Date: {account.ExpirationDate}</p>
              <p>Security Code: {account.SecurityCode}</p>
              <div className='flex flex-col'>
                <li className='cursor-pointer font-bold' onClick={LogOut}>
                  Log Out
                </li>
                <li
                  className='cursor-pointer font-bold'
                  onClick={deleteAccount}
                >
                  Delete Account
                </li>
                <p className='mt-5'>
                  View Your Card{' '}
                  <span
                    onClick={() => navigate('/CreateCard')}
                    className='text-blue-500 cursor-pointer'
                  >
                    Here
                  </span>
                </p>
              </div>
            </div>
          ))}
          {filteredAccountInfo.length === 0 && (
            <div>
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
          )}
          <p className='mt-2'>
            Purchased items{' '}
            <span
              onClick={() => navigate('/PurchasedItems')}
              className='text-blue-500 cursor-pointer'
            >
              Here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;

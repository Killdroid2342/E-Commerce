import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasketModal from './basketModal/BasketModal';
import { decodeToken } from 'react-jwt';
import Cookies from 'js-cookie';
const { VITE_API_URL } = import.meta.env;
import axios from 'axios';
import AccountInfo from './AccountInfo/AccountInfo';

const instance = axios.create({
  baseURL: VITE_API_URL,
});

interface AllItems {
  id: number;
  type: string;
  des: string;
  img: string;
  lowPrice: string;
  name: string;
  price: string;
}
const Nav = ({ basketItems, setBasketItems }: any) => {
  const [dropdownNav, setDropdownNav] = useState(false);
  const [basketModal, setBasketModal] = useState(false);
  const [accountInfoModal, setAccountinfomodal] = useState(false);
  const [clientUsername, setClientUsername] = useState('');
  const [allItems, setAllItems] = useState<AllItems[]>([]);
  const [searchActive, setSearchActive] = useState(false);

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };
  const isLoggedIn = !!clientUsername;
  const navigate = useNavigate();

  const backToHome = () => {
    Cookies.remove('UserjwtToken');
    navigate('/');
  };
  const handleChange = async (e: any) => {
    const { value } = e.currentTarget;
    if (value) {
      const res = await instance.post('/items/search', {
        searchItem: value,
      });
      setAllItems(res.data);
    } else {
      setAllItems([]);
    }
  };

  const hover = () => {
    setDropdownNav(true);
  };

  const leave = () => {
    setDropdownNav(false);
  };

  const LogOut = () => {
    Cookies.remove('UserjwtToken');
    localStorage.removeItem('basketItems');
    navigate('/');
  };
  const OpenModal = () => {
    setBasketModal(!basketModal);
  };
  const openAccountInfo = () => {
    setAccountinfomodal(!accountInfoModal);
  };
  const usernameJWT = () => {
    const getJWT = Cookies.get('UserjwtToken');
    if (getJWT) {
      const decodedTokenUsername = (decodeToken(getJWT) as { username: string })
        .username;
      setClientUsername(decodedTokenUsername);
    } else return;
  };

  useEffect(() => {
    usernameJWT();
  }, []);
  const deleteAccount = async () => {
    try {
      await instance.post('/user/delete-user', { username: clientUsername });
      backToHome();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <nav className={`nav ${searchActive ? 'search-active' : ''}`}>
        <button
          className='menu-button'
          onClick={() => setDropdownNav(!dropdownNav)}
        >
          <span className='menu-icon'>
            &#9776;
            {dropdownNav && (
              <ul className='hoverBrowse'>
                <li className='liHover' onClick={() => navigate('/shoes')}>
                  Shoes
                </li>
                <li
                  className='liHover'
                  onClick={() => navigate('/Accessories')}
                >
                  Accessories
                </li>
                <li
                  className='liHover'
                  onClick={() => navigate('/Electronics')}
                >
                  Electronics
                </li>
              </ul>
            )}
          </span>
        </button>
        <img
          src='/assets/images/logo.png'
          alt=''
          className='img'
          onClick={() => navigate('/main')}
        />
        <div
          className={`searchIcon ${searchActive ? 'active' : ''}`}
          onClick={toggleSearch}
        >
          X
        </div>
        <div className={`inputDiv ${searchActive ? 'active' : ''}`}>
          <input
            type='search'
            name=''
            id=''
            placeholder='Search Item'
            className='searchInput'
            onChange={handleChange}
          />
          <div className='ulDiv'>
            <ul className='ulInputSearch'>
              {allItems.map((item: any) => (
                <li
                  key={item.ID}
                  className='liSearch'
                  onClick={() => {
                    if (item.des === 'This is a Electronics') {
                      navigate('/Electronics');
                    } else if (item.des === 'This is a shoe') {
                      navigate('/shoes');
                    } else if (item.des === 'This is an accessories') {
                      navigate('/Accessories');
                    } else return;
                  }}
                >
                  <img className='searchImg' src={item.img} alt={item.name} />
                  <div className='contentDiv'>
                    <h3 className='contentName'>{item.name}</h3>
                    <p className='contentDes'>{item.des}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {searchActive && (
          <div className='closeSearchButton' onClick={toggleSearch}>
            X
          </div>
        )}

        <ul className='browseUL'>
          <li className='browseLI' onMouseEnter={hover} onMouseLeave={leave}>
            Browse
            {dropdownNav && (
              <ul className='hoverBrowse'>
                <li className='liHover' onClick={() => navigate('/shoes')}>
                  Shoes
                </li>
                <li
                  className='liHover'
                  onClick={() => navigate('/Accessories')}
                >
                  Accessories
                </li>
                <li
                  className='liHover'
                  onClick={() => navigate('/Electronics')}
                >
                  Electronics
                </li>
              </ul>
            )}
          </li>
          {isLoggedIn ? (
            <>
              <li
                className='loginLIDetails'
                onClick={openAccountInfo}
              >{`Account Details`}</li>
              {accountInfoModal && (
                <AccountInfo
                  setAccountinfomodal={setAccountinfomodal}
                  clientUsername={clientUsername}
                  LogOut={LogOut}
                  deleteAccount={deleteAccount}
                />
              )}
              <li className='loginLIContent' onClick={OpenModal}>
                {`Basket: 🛒`}
              </li>
              {basketModal && (
                <BasketModal
                  setBasketModal={setBasketModal}
                  basketItems={basketItems}
                  setBasketItems={setBasketItems}
                  basketModal={basketModal}
                />
              )}
            </>
          ) : (
            <li className='loginLIContent' onClick={() => navigate('/')}>
              Sign Up
            </li>
          )}
        </ul>
      </nav>

      <div className='flex justify-evenly bg-neutral-100 p-5 mt-24 mainContentDiv'>
        <p className='mainContent' onClick={() => navigate('/shoes')}>
          Shoes
        </p>
        <p className='mainContent' onClick={() => navigate('/Accessories')}>
          Accessories
        </p>
        <p className='mainContent' onClick={() => navigate('/Electronics')}>
          Electronics
        </p>
      </div>
    </>
  );
};

export default Nav;

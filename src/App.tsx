import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Pages/Main';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
import Shoes from './Pages/Shoes';
import Accessories from './Pages/Accessories';
import Electronics from './Pages/Electronics';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Main',
    element: <Main />,
  },
  {
    path: '/Shoes',
    element: <Shoes />,
  },
  {
    path: '/Accessories',
    element: <Accessories />,
  },
  {
    path: '/Electronics',
    element: <Electronics />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

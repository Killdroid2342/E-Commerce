import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Pages/Main';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';

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
    path: '*',
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

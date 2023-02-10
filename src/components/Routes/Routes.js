import { useRoutes } from 'react-router-dom'
import Home from '../HomePage/Home';
import Reviews from '../Reviews/Reviews';
import Products from '../Products/Products';
import SignUp from '../SignUp/SignUp';
import Pricing from '../Pricing/Pricing';



function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Reviews", element: <Reviews /> },
    // { path: "/products", element: <Products /> },
    { path: "/pricing", element: <Pricing /> },

    { path: "/sign-up", element: <SignUp /> },
  ]);
 
  

  return routes;
}

export default AppRoutes
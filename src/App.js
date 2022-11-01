import './App.css';
import {Routes,Route} from 'react-router-dom'
import Nav from './Components/Nav';
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart';
import Footer from './Components/Footer';
import { Provider } from 'react-redux';
import store from './store';
import ShopDetails from './Pages/ShopDetails';
import ShopList from './Components/ShopList';
import About from './Pages/About';
import { Auth0Provider } from "@auth0/auth0-react";
import {Helmet} from 'react-helmet'

import ReduxToastr from 'react-redux-toastr'


const App=()=> {
  return (
   <>
    <Auth0Provider
    domain="dev-5pd1uz0yh16k0z11.us.auth0.com"
    clientId="O4xzDVHm3VbxDCZQsV0zMvn5A4DxmmY9"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
    <ReduxToastr
   timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-left"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick
      />
      
  <Helmet>
        <title>Eshopspot</title>
        <meta name="description" content="Buy Eshopspot product"/>
        <meta name="keywords" content="Online,global brands,shopping,Categories of The Month"/>
      </Helmet>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<ShopList/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product/:productId' element={<ShopDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
       
      </Routes>
      <Footer/>

      </Provider>
      </Auth0Provider>
   </>
  );
}

export default App;

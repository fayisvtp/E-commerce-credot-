

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Mycontext } from './component/context/Context';
import { useState } from 'react';
import { Products } from './component/Productslists/DummyProducts';
import Cart from './component/Cart';
import { userList } from './component/users/UserList';
import LoginPage from './component/Login/LoginPage';

function App() {
  const [product, setProduct] = useState(Products);
  const [cart, setCart] = useState([]);
  const [user,setUser] = useState (userList)
  const [isloggedin,setLoggedin] = useState (false)
  return (
    <>
      <Mycontext.Provider value={{ product, setProduct, cart, setCart ,user,setUser,isloggedin,setLoggedin}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart/:productId' element={<Cart />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </Mycontext.Provider>
    </>
  );
}

export default App;

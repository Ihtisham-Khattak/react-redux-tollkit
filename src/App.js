import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Store from './Store/Store';
import { Provider } from 'react-redux';


import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">

      <Provider store={Store}>

      <BrowserRouter>
      <Navbar />

        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      
      </BrowserRouter>


      </Provider>

    </div>
  );
}

export default App;

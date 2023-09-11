import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Habits from './components/Habits';
import Navbar from './components/Navbar';
import Home from './components/Home';


const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/my-habits' element={<Habits />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
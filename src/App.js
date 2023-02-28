import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quotes';
import NavBar from './pages/NavBar';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/calculator" exact element={<Calculator />} />
      <Route path="/quote" exact element={<Quote />} />

    </Routes>
  </>
);

export default App;

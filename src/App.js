import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Calculator from './pages/Calculator';
import Header from './components/Header';
import Home from './pages/Home';
import Quote from './pages/Quote';

// eslint-disable-next-line
const App = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </div>
  );
};

export default App;

import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Header from './components/Header';

// eslint-disable-next-line
const App = () => {
  return (
    <div className="App">
      <Header />
      <Calculator />
    </div>
  );
};

export default App;

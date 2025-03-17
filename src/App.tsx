import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import Checkout from './components/Checkout';
import Status from './components/Status';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
      }}>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/status" element={<Status />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={HomePage} />
      </Routes>
    </Router>
  );
}

export default App;

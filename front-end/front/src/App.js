import React from 'react'
import './App.css'
import Data from './components/Data';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Data></Data>
      <Header />
      <Home />
      <Footer />
    </div>
      
  );
}

export default App
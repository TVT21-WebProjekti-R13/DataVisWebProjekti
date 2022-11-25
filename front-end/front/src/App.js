import React from 'react'
import './App.css'
import Data from './components/Data';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Visuals from './components/Visuals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visuals" element={<Visuals />} />
        </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;

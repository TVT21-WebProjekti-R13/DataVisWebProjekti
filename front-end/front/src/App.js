import { React, useState } from 'react'
import './App.css'
import Visuals from './components/Visuals';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [tables, setTables] = useState();
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home setTables={setTables} />} />
          <Route path="/visuals" element={<Visuals setTables={tables} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

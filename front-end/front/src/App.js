import { React, useState } from 'react'
import './App.css'
import Visuals from './components/Visuals';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.withCredentials = true;
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

function App() {
  const [tables, setTables] = useState();
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home setTables={setTables} />} />
          <Route path="/visuals" element={<Visuals setTables={tables} />}>
            <Route path=":id" element={<Visuals />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

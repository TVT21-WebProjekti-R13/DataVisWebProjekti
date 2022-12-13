import { React, useState } from 'react'
import './App.css'
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import axios from 'axios';
import ViewPage from './components/views/ViewPage';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
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
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view/:viewID" element={<ViewPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
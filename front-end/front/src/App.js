import React, { useState } from 'react'
import './App.css'
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChatJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
 } from 'chart.js';

import Data from './components/Data';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { UserData } from './csvjson'
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import LineChart from './components/LineChart';
import StartDate from './components/StartDate';


ChatJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.time),
    datasets: [{
      label: "Lower confidence limit (2,5%)",
      data: UserData.map((data) => data.lcl),
      backgroundColor: [
        "rgba(75,192,192,1)",
        
      ],
     

    },{label: "Upper confidencs limit (2,5%)",
       data: UserData.map((data) => data.ucl),
       backgroundColor: ["red"]}]
  })


  
  return (
    <div className="App">
      <Header/>
      <div style={{ width: 1920 }}>
        <BarChart chartData={userData}/> 
      </div>
      <StartDate />
      <div style={{ width: 1920 }}>
        <LineChart chartData={userData}/>
      </div>
      <div style={{ width: 600 }}>
        <PieChart chartData={userData}/>
      </div>
      <Footer/>
    </div>
      
  );
}


//yksi muutos
export default App
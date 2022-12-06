import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { useParams } from 'react-router-dom';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Visuals(props) {
  const [chartData, setChartData] = useState();
  let table = [];
  const { id } = useParams();

  async function getCustomData() {
    const { data } = await axios.get("/data/getCustomData", {
      params: { shareID: id },
    });
    console.log(data);
    return data;
  }

  function getDataFromProps() {
    if (props.setTables) {
      if (props.setTables[0].length === 1) {
        table = props.setTables.split(',');
      } else {
        table = props.setTables;
      }
    } 
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await axios.post('http://localhost:3001/data/saveData', {
      params:
      {
        data1: table,
      }
    })
      .then(function (response) {
        //console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //Get data from backend and set it to charts Datasets and to the useState
  const fetchData = async () => {
    let result = await axios.get("http://localhost:3001/data/getData",
      {
        params:
        {
          data1: table,
        }
      })
    //Save results to "result"
    result = result.data;
    //const labels = [];
    const labels = result[0].map(row => row.time);
    const datasets = [];
    let colors = ["rgb(252, 186, 3)", "rgb(202, 17, 200)", "rgb(102, 117, 20)", "rgb(2, 255, 20)", "rgb(2, 2, 200)", "rgb(200, 2, 2)"]

    for (let i = 0; i < result.length; i++) {
      //labels[i] = result[i].map(row => row.time);
      datasets[i] = {
        label: table[i],
        data: result[i].map(row => row.anomaly),
        borderColor: colors[i],
        backgroundColor: colors[i],
      }
      //console.log(datasets[i]);
    }




    //set Datasets
    let data = {
      labels,
      datasets,
    };

    //set Dataset to a useState
    setChartData(data);
  }

  //Use effect to make fetchData() run on render
  useEffect(() => {
    if (id) {
      getCustomData()
      .then((data) => {
        if (data) {
          table = data.split(',');
          console.log(table)
          fetchData();
        }
        
      })
    } else {
      getDataFromProps();
      fetchData();
    }
  }, []);

  //Set options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'V1',
      },
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };
  //Check if the useState has Data. If it does return the function
  if (chartData) {
    return (
      <>
        <Line options={options} data={chartData}></Line>
        <form onSubmit={handleSubmit}>
          <button value={table}>Save visual</button>
        </form>
      </>
    );
  }
}

import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import React from "react";
import { Chart } from "chart.js/auto";
import "chartjs-adapter-luxon";
import { useParams } from 'react-router-dom';
import { Line } from "react-chartjs-2";

export default function Visuals(props) {
  const [chartData, setChartData] = useState();
  const [tablestate, setTablestate] = useState([]);
  let table = useRef([]);
  const { id } = useParams();
  let [x, setx] = useState({});
  async function getCustomData() {
    const { data } = await axios.get("/data/getCustomData", {
      params: { shareID: id },
    });
    return data;
  }
  function getScales() {
    if (localStorage.getItem("scales") === "y") {
      localStorage.setItem("scales", "y");
      console.log("Scales Found")
      setx(x = {

      })
    } else if (localStorage.getItem("scales") === "n") {
      localStorage.setItem("scales", "n");
      console.log("No Scales")
      setx(x = {
        type: "time",
        time: {
          unit: "year",
        },
      })

    }
    console.log(x)
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
  function generateColor() {

    let color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
    return color;
  }
  const handleSubmit = async (e) => {
    table = tablestate;
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
    result = result.data;
    const datasets = [];
    for (let i = 0; i < result.length; i++) {
      let color = generateColor();
      const time = result[i].map(row => row.time);
      const value = result[i].map(row => row.anomaly);
      let data = [];
      let dataObj;
      for (let o = 0; o < time.length; o++) {
        dataObj = { time: time[o], value: value[o] }
        data[o] = dataObj;
      }
      datasets[i] = {
        label: table[i].toString(),
        data: data,
        borderColor: color,
        backgroundColor: color,
        parsing: {
          xAxisKey: "time",
          yAxisKey: "value",
        },
        pointRadius: 1,
      }
    }

    const data = {
      datasets
    }
    setChartData(data);
  }

  useEffect(() => {
    if (id) {
      getCustomData()
        .then((data) => {
          if (data) {
            table = data.split(',');
            getScales()
            fetchData();

            localStorage.setItem("table", table);
            setTablestate(table)
          }

        })
    } else if (props.setTables) {
      getDataFromProps();
      getScales()
      fetchData();

      localStorage.setItem("table", table);
      setTablestate(table)
    } else {
      table = localStorage.getItem("table").split(',');
      getScales()
      fetchData();
      setTablestate(table)
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
        text: 'Data',
      },
    },
    scales: {
      x
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };
  console.log(options)
  if (chartData) {
    return (
      <>
        <Line options={options} data={chartData}></Line>
        {localStorage.getItem("scales") !== "y" && (
          <form onSubmit={handleSubmit}>
            <button value={table}>Save visual</button>
          </form>
        )}
      </>
    );
  }
}

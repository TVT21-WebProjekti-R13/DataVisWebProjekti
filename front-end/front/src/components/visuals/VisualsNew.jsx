import React from "react";
import { Chart } from "chart.js/auto";
import "chartjs-adapter-luxon";
import { Line, Pie } from "react-chartjs-2";
import { useState } from "react";
import { fontSize, textAlign } from "@mui/system";

export default function Visualsnew({ chart }) {
  const [infoText, setInfotext] = useState();
  let info = [];
  const data = {
    datasets: chart.data.map((chartData) => {
      return {
        data: chartData.map((data) => {
          return {
            time: data.time.toString(),
            value: data.anomaly,
          };
        }),
        parsing: {
          xAxisKey: "time",
          yAxisKey: "value",
        },
      };
    }),
  };





  data.datasets.forEach((dataset, index) => {
    const tablearray = chart.tables.split(",");
    dataset.label = tablearray[index];
    if (dataset.label === "v7c1") {
      dataset.yAxisID = "co2";
    } else if (dataset.label === "v7a1") {
      dataset.yAxisID = "temperature";
    } else if (dataset.label === "v10") {
      for (let i = 0; i < chart.data[2].length; i++) {
        info.push(chart.data[2][i].info)
      }
      dataset.yAxisID = "temperature";
      dataset.showLine = false;
      dataset.pointRadius = 10;
      dataset.hoverRadius = 10;
    }
  });

  function graphClickEvent(event, array) {

    if (array[0].element.options.radius === 10) {
      let index = array[0].index;
      setInfotext(info[index])

    }
  }

  const options = {
    responsive: true,
    scales: {},
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Data",
      },
    },
    onClick: graphClickEvent,
  };

  if (data.datasets.some((dataset) => dataset.label === "v5" || dataset.label === "v6")) {
    options.scales = {};
  } else if (data.datasets.some((dataset) => dataset.label === "v7c1")) {
    options.scales = {
      co2: {
        type: "linear",
        display: true,
        position: "left",
      },
      temperature: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        type: "linear",
        max: 2022,
      },
    };
  } else {
    options.scales = {
      x: {
        type: "time",
        time: {
          unit: "month",
        },
      },
    };
  }

  //console.log(data)
  //console.log(options)

  const boldText = {
    fontWeight: 'bold',
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  };
  return (
    <div style={boldText}>

      <Line options={options} data={data} />
      {infoText}
    </div >
  );
}

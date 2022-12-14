import React from "react";
import { Line } from "react-chartjs-2";

export const VisualsV8 = ({ chart }) => {
  const data = { datasets: [] };

  const countries = Object.keys(chart.data[0][0]).filter((key) => key !== "time")

  countries.forEach((country) => {
    const dataset = {
      label: country,
      data: chart.data[0].map((data) => {
        return {
          x: data.time.toString(),
          y: data[country],
        };
      }),
      parsing: {
        xAxisKey: "x",
        yAxisKey: "y",
      },
    };
    data.datasets.push(dataset);
  });

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
  };

  const boldText = {
    fontWeight: 'bold',
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  };


  const desclink = chart.desclink.split(",");
  const datalink = chart.datalink.split(",");

  return (
    <div style={boldText}>
      <p>{chart.description}</p>
      <p>
        Artikkeli:{" "}
        {desclink.map((link) => {
          return (
            <a href={link} target="_blank">
              {link}
            </a>
          );
        })}
      </p>
      <p>
        Data:{" "}
        {datalink.map((link) => {
          return (
            <a href={link} target="_blank">
              {link}
            </a>
          );
        })}
      </p>
      <Line options={options} data={data} />
    </div>
  );
};

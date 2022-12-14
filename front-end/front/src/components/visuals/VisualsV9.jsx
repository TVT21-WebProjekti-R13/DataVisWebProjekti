import React from "react";
import { Pie } from "react-chartjs-2";

export default function VisualsV9({ chart }) {
  const data = { datasets: [], labels: [] };
  const Sectorlabels = chart.data[0].map((item) => item["sector"]);
  const Sectorvalues = chart.data[0].map((item) => item["anomaly"]);

  const Sublabels = chart.data[1].map((item) => item["Sub-sector"]);
  const Subvalues = chart.data[1].map((item) => item["Share of global greenhouse gas emissions (%)"]);

  const SubSublabels = chart.data[2].map((item) => item["Sub-sector"]);
  const SubSubvalues = chart.data[2].map((item) => item["Share of global greenhouse gas emissions (%)"]);
  data.labels = Sectorlabels;

  function generateColors(x) {
    let len = x.length
    let hex;
    let colors = [];
    for (let i = 0; i < len; i++) {
      hex = "#" + Math.floor(Math.random() * 16777215).toString(16);
      colors.push(hex)
    }
    return colors;
  }
  function createDataset() {
    data.datasets.push(
      { type: 'pie', data: Sectorvalues, backgroundColor: generateColors(Sectorvalues) },
    );
  }

  function graphClickEvent(event, array) {

  }

  createDataset();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {

        },
      },
    },
    onClick: graphClickEvent,
  }
  return (
    <div style={{ width: "1000px" }}>
      <Pie options={options} data={data} />
    </div>
  );
}

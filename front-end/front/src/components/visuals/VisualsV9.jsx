import React from "react";
import { Pie } from "react-chartjs-2";

export default function VisualsV9({ chart }) {
  const exampleData = [
    [
      {
        sector: "Energy",
        anomaly: "73.2",
      },
      {
        sector: "Industrial processes",
        anomaly: "5.2",
      },
      {
        sector: "Waste",
        anomaly: "3.2",
      },
      {
        sector: "Agriculture, Forestry & Land Use (AFOLU)",
        anomaly: "18.4",
      },
    ],
    [],
  ];

  const data = { datasets: [], labels: [] };
  const labels = exampleData[0].map((item) => item["sector"]);
  const values = exampleData[0].map((item) => item["anomaly"]);
  data.labels = labels;
  data.datasets.push({
    data: values,
  });

  const options = {};

  return (
    <div style={{ width: "1000px" }}>
      <Pie options={options} data={data} />
    </div>
  );
}

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Pie } from "react-chartjs-2";

export default function VisualsV9({ chart }) {
  const [data, setData] = useState({ datasets: [], labels: [] })
  const [count, setCount] = useState(0)
  const Sectorlabels = chart.data[0].map((item) => item["sector"]);
  const Sectorvalues = chart.data[0].map((item) => item["anomaly"]);

  const Sublabels = chart.data[1].map((item) => item["Sub-sector"]);
  const Subvalues = chart.data[1].map((item) => item["Share of global greenhouse gas emissions (%)"]);

  const SubSublabels = chart.data[2].map((item) => item["sub-sector"]);
  const SubSubvalues = chart.data[2].map((item) => item["Share of global greenhouse gas emissions (%)"]);
  console.log(chart.data)
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
    setData({ datasets: [{ type: 'pie', data: Sectorvalues, backgroundColor: generateColors(Sectorvalues) }], labels: Sectorlabels })
  }
  useEffect(() => {
    createDataset();
  }, [])
  function graphClickEvent(event, array) {
    if (count == 0) {
      setCount(1);
      setData({ datasets: [{ type: 'pie', data: Subvalues, backgroundColor: generateColors(Subvalues) }], labels: Sublabels })
    } else if (count == 1) {
      setCount(2);
      setData({ datasets: [{ type: 'pie', data: SubSubvalues, backgroundColor: generateColors(SubSubvalues) }], labels: SubSublabels })
    } else {
      setCount(0);
      setData({ datasets: [{ type: 'pie', data: Sectorvalues, backgroundColor: generateColors(Sectorvalues) }], labels: Sectorlabels })
    }
  }
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




  console.log(data)

  return (
    <div style={{ width: "60%" }}>
      <Pie options={options} data={data} />
    </div>
  );
}

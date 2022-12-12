import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import VisualsNew from "./VisualsNew";

export default function ViewPage() {
  const { viewID } = useParams();
  const [chartData, setChartData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(process.env.REACT_APP_ADDRESS + `/data/${viewID}`);
    return data;
  };

  useEffect(() => {
    fetchData().then((data) => {
      setChartData(data);
    });
  }, []);

  return (
    <div>
      {chartData.map((chart) => {
        return <VisualsNew key={chart.visual_name} chart={chart} />;
      })}
    </div>
  );
}

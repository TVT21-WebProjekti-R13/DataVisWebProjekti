import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import VisualsNew from "../visuals/VisualsNew";
import { VisualsV8 } from "../visuals/VisualsV8";
import VisualsV9 from "../visuals/VisualsV9";

export default function ViewPage() {
  const { viewID } = useParams();
  const [chartData, setChartData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:3001/data/${viewID}`);
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
        if (chart.visual_name === "v8") {
          return (
            <div key={chart.visual_name}>
              <VisualsV8 chart={chart} />
            </div>
          );
        } else if (chart.visual_name === "v9") {
          return (
            <div key={chart.visual_name}>
              <VisualsV9 chart={chart} />
            </div>
          );
        }
        return (
          <div key={chart.visual_name}>
            <VisualsNew chart={chart} />
          </div>
        );
      })}
    </div>
  );
}

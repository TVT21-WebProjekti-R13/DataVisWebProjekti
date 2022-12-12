import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import VisualsNew from "./VisualsNew";
import { VisualsV8 } from "./VisualsV8";

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
              <div>
                <VisualsV8 key={chart.visual_name} chart={chart} />
              </div>
            )
          }
        return <VisualsNew key={chart.visual_name} chart={chart} />;
      })}
    </div>
  );
}

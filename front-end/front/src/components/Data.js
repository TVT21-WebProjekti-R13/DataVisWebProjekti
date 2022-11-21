import { useEffect, useState } from 'react';
import axios from 'axios';

function Data() {
    const [chartData, setChartData] = useState();


    useEffect(() => {
        async function getChartData() {
            const { data } = await axios.get("http://localhost:3001/data/getData",
                {
                    params:
                    {
                        data1: "hadcrutglobalannual",
                        data2: "hadcrutglobalmonthly"
                    }
                })
            setChartData(data);

        }
        getChartData();
    }, []);

    console.log(chartData);
}


export default Data;







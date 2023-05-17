import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import "./css/LineChartGetThree.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChartGetThree(props) {
  let [data, setData] = useState({});

  useEffect(() => {
    let ignore = false;
    var labels = [];
    var dataLabels = [];
    var temporalData = [];

    async function startFetching() {
      const json = await props.getData();
      if (!ignore) {
        if (json.gameSales) {
          console.log(json.gameSales);
          temporalData = json.gameSales;
          temporalData.sort((a, b) => b.totalSales - a.totalSales);
          for (let i = 0; i < 30; i++) {
            labels.push(temporalData[i].game);
            dataLabels.push(temporalData[i].totalSales);
          }
        }

        setData({
          labels: labels,
          datasets: [
            {
              label: "Ventas totales en MDU",
              data: dataLabels,
              backgroundColor: "rgba(100, 100, 200, 0.5)",
              borderColor: "rgb(100, 100, 132)",
              borderWidth: 2,
            },
          ],
        });
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, [true]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Los 30 juegos más vendidos en total en Millones de Unidades (MDU)",
      },
    },
  };

  if (Object.keys(data).length !== 0) {
    return (
      <>
        <div className='line-chart'>
          <Line options={options} data={data} />;
        </div>
      </>
    );
  }
}

export default LineChartGetThree;

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
import "./css/LineChartGetSix.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChartGetSix(props) {
  let [data, setData] = useState({});

  useEffect(() => {
    let ignore = false;
    var labels = [];
    var dataLabels = [];
    var temporalData = [];

    async function startFetching() {
      const json = await props.getData();
      if (!ignore) {
        if (json.totalSales) {
          console.log(json.totalSales);
          temporalData = json.totalSales.sort((a, b) => a.year - b.year);
          for (let i = 0; i < temporalData.length; i++) {
            labels.push(temporalData[i].year);
            dataLabels.push(temporalData[i].totalSales);
          }
        }

        setData({
          labels: labels,
          datasets: [
            {
              label: "Ventas totales en MDU",
              data: dataLabels,
              backgroundColor: "rgba(0, 100, 200, 0.5)",
              borderColor: "rgb(0, 100, 200)",
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
        text: "Ventas de videojuegos totales cada año en Millones de Unidades (MDU)",
      },
    },
  };

  if (Object.keys(data).length !== 0) {
    return (
      <>
        <div className='line-chart-six'>
          <Line options={options} data={data} />;
        </div>
      </>
    );
  }
}

export default LineChartGetSix;

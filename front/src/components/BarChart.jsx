import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import "./css/BarChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

/* export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
}; */

function BarChart(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    let ignore = false;
    var labels = [];
    var dataLabels = [];

    async function startFetching() {
      const json = await props.getData(data, setData);
      if (!ignore) {
        if (json.platformSales) {
          for (let i = 0; i < json.platformSales.length; i++) {
            labels.push(json.platformSales[i].platform);
            dataLabels.push(json.platformSales[i].totalSales);
          }
        }

        setData({
          labels: labels,
          datasets: [
            {
              label: "Ventas totales ($)",
              data: dataLabels,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
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
        text: "Ventas",
      },
    },
  };

  if (Object.keys(data).length !== 0) {
    console.log("bar chart: ", data);
    return (
      <>
        <div className='bar-chart'>
          <Bar options={options} data={data} />
        </div>
      </>
    );
  }
}

export default BarChart;

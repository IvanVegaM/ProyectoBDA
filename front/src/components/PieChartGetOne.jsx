import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./css/PieChart.css";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

function PieChartGetOne(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    let ignore = false;
    var labels = [];
    var dataLabels = [];
    var backgroundColors = [];
    var borderColors = [];
    var temporalColor = "";

    async function startFetching() {
      const json = await props.getData();
      if (!ignore) {
        if (json.platformSales) {
          for (let i = 0; i < json.platformSales.length; i++) {
            // Get the labels and data for the pie chart
            labels.push(json.platformSales[i].platform);
            dataLabels.push(json.platformSales[i].totalSales);
            // Generate random colors for the pie chart
            temporalColor = `rgba(${Math.floor(
              Math.random() * 255
            )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
              Math.random() * 255
            )}`;
            borderColors.push(temporalColor + ")");
            backgroundColors.push(temporalColor + ", 0.5)");
          }
        }

        setData({
          labels: labels,
          datasets: [
            {
              label: "Ventas totales en MDU",
              data: dataLabels,
              backgroundColor: backgroundColors,
              borderColor: borderColors,
              borderWidth: 1,
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
        text: "Videojuegos vendidos por plataforma en Millones de Unidades (MDU)",
      },
    },
  };

  if (Object.keys(data).length !== 0) {
    // console.log("pie chart: ", data);
    return (
      <>
        <div className='pie-chart'>
          <Pie options={options} data={data} />
        </div>
      </>
    );
  }
}

export default PieChartGetOne;

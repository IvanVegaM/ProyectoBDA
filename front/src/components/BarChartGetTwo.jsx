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
import "./css/BarChartGetTwo.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChartGetTwo(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    let ignore = false;
    var labels = [];
    var temporalLabels = new Set();
    var datasets = [];
    var temporalTotalCount = 0;
    var temporalMap = new Map();
    var sortedMap = new Map();
    var bestGames = [];
    var temporalDataset = {};
    var temporalColor = "";
    var temporalData = [];

    async function startFetching() {
      const json = await props.getData();
      // console.log(json);
      if (!ignore) {
        if (json.games) {
          for (let i = 0; i < json.games.length; i++) {
            temporalTotalCount = 0;
            json.games[i].sales.forEach((sale) => {
              temporalTotalCount += sale.sales;
            });
            temporalMap.set(json.games[i].game, temporalTotalCount);
          }
        }
        // console.log(temporalMap);
        sortedMap = new Map([...temporalMap].sort((a, b) => b[1] - a[1]));
        // console.log("sortedMap: ", sortedMap);

        for (let i = 0; i < 10; i++) {
          json.games.forEach((gameObject) => {
            if (gameObject.game === Array.from(sortedMap)[i][0]) {
              bestGames.push(gameObject);
              for (let sale of gameObject.sales) {
                temporalLabels.add(sale.platform);
              }
            }
          });
        }
        labels = Array.from(temporalLabels);
        //console.log("labels: ", labels);
        // console.log("bestGames: ", bestGames);

        for (let i = 0; i < labels.length; i++) {
          temporalDataset = {};
          temporalData = [];

          // Dataset data
          temporalDataset.label = labels[i];

          // Fill the array with 0s
          for (let j = 0; j < bestGames.length; j++) {
            temporalData.push(0);
          }

          for (let j = 0; j < bestGames.length; j++) {
            for (let k = 0; k < bestGames[j].sales.length; k++) {
              if (bestGames[j].sales[k].platform === labels[i]) {
                temporalData[j] = bestGames[j].sales[k].sales;
              }
            }
          }
          temporalDataset.data = temporalData;

          // Dataset colors
          temporalColor = `rgba(${Math.floor(
            Math.random() * 255
          )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
            Math.random() * 255
          )}`;
          temporalDataset.backgroundColor = [temporalColor + ", 0.5)"];
          temporalDataset.borderColor = [temporalColor + ")"];
          datasets.push(temporalDataset);
        }

        setData({
          labels: bestGames.map((game) => game.game),
          datasets: datasets,
        });
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, [true]);

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Top 10 juegos más vendidos con ventas por plataforma en Millones de Unidades (MDU)",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  if (Object.keys(data).length !== 0) {
    // console.log("bar chart: ", data);
    return (
      <>
        <div className='bar-chart-get-two'>
          <Bar options={options} data={data} />
        </div>
      </>
    );
  }
}

export default BarChartGetTwo;

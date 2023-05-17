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
import "./css/BarChartGetSeven.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChartGetSeven(props) {
  const [data, setData] = useState({});
  const [initialYear, setInitialYear] = useState(1980);
  const [finalYear, setFinalYear] = useState(2025);
  const [inputValueInitial, setInputValueInitial] = useState(initialYear);
  const [inputValueFinal, setInputValueFinal] = useState(finalYear);

  useEffect(() => {
    if (
      inputValueInitial < finalYear &&
      inputValueInitial >= 1980 &&
      inputValueInitial < 2025
    ) {
      setInitialYear(inputValueInitial);
    }
  }, [inputValueInitial]);

  useEffect(() => {
    if (
      inputValueFinal > initialYear &&
      inputValueFinal <= 2025 &&
      inputValueFinal > 1980
    ) {
      setFinalYear(inputValueFinal);
    }
  }, [inputValueFinal]);

  const handleInputValueInitialChange = (event) => {
    setInputValueInitial(event.target.value);
  };

  const handleInputValueFinalChange = (event) => {
    setInputValueFinal(event.target.value);
  };

  useEffect(() => {
    let ignore = false;
    var labels = [];
    var dataLabels = [];

    async function startFetching() {
      const json = await props.getData(initialYear, finalYear);
      console.log("siete: ", json);
      if (!ignore) {
        if (json.games) {
          for (let i = 0; i < json.games.length; i++) {
            labels.push(json.games[i].game + " (" + json.games[i].year + ")");
            dataLabels.push(json.games[i].totalSales);
          }
        }

        setData({
          labels: labels,
          datasets: [
            {
              label: "Unidades vendidas en total en MDU",
              data: dataLabels,
              backgroundColor: "rgba(20, 240, 150, 0.5)",
            },
          ],
        });
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, [initialYear, finalYear]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text:
          "Top 10 videojuegos que más se vendieron en Millones de Unidades (MDU) con fecha de lanzamiento de " +
          initialYear +
          " a " +
          finalYear,
      },
    },
  };

  if (Object.keys(data).length !== 0) {
    return (
      <>
        <div className='bar-chart-get-seven'>
          <div className='inputs'>
            <p>Elige el intervalo de los años a mostrar (1980 - 2025): </p>
            <p>Año inicial:</p>
            <input
              value={inputValueInitial}
              onChange={handleInputValueInitialChange}
            />
            <p>Año final:</p>
            <input
              value={inputValueFinal}
              onChange={handleInputValueFinalChange}
            />
          </div>
          <Bar options={options} data={data} />
        </div>
      </>
    );
  }
}

export default BarChartGetSeven;

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
import "./css/LineChartGetEight.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChartGetEight(props) {
  const [data, setData] = useState({});
  const [lowerRating, setLowerRating] = useState(0);
  const [upperRating, setUpperRating] = useState(5);
  const [inputValueInitial, setInputValueInitial] = useState(lowerRating);
  const [inputValueFinal, setInputValueFinal] = useState(upperRating);

  useEffect(() => {
    if (
      inputValueInitial < upperRating &&
      inputValueInitial >= 0 &&
      inputValueInitial < 5
    ) {
      setLowerRating(inputValueInitial);
    }
  }, [inputValueInitial]);

  useEffect(() => {
    if (
      inputValueFinal > lowerRating &&
      inputValueFinal <= 5 &&
      inputValueFinal > 0
    ) {
      setUpperRating(inputValueFinal);
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
    var labels = [0, 1, 2, 3, 4, 5];
    var dataLabels = [];
    var salesPerRating = [0, 0, 0, 0, 0, 0];
    var temporalIndex = -1;

    async function startFetching() {
      const json = await props.getData(lowerRating, upperRating);
      console.log("ocho: ", json);
      if (!ignore) {
        if (json.sales) {
          for (let i = 0; i < json.sales.length; i++) {
            // labels.push(json.sales[i].game + " (" + json.sales[i].rating + ")");
            // dataLabels.push(json.sales[i].totalSales);
            temporalIndex = Math.floor(json.sales[i].rating);
            salesPerRating[temporalIndex] =
              salesPerRating[temporalIndex] + json.sales[i].totalSales;
          }

          console.log("salesPerRating: ", salesPerRating);
        }

        setData({
          labels: labels,
          datasets: [
            {
              label: "Unidades vendidas en total en MDU",
              data: salesPerRating,
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        });
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, [lowerRating, upperRating]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Ventas de videojuegos en Millones de Unidades (MDU) por estrellas de calificación (0 - 5)",
      },
    },
  };

  if (Object.keys(data).length !== 0) {
    return (
      <>
        <div className='line-chart-eight'>
          <div className='inputs'>
            <p>Elige el intervalo de calificaciones a mostrar (0 - 5): </p>
            <p>Calificación inicial:</p>
            <input
              value={inputValueInitial}
              onChange={handleInputValueInitialChange}
            />
            <p>Calificación final:</p>
            <input
              value={inputValueFinal}
              onChange={handleInputValueFinalChange}
            />
          </div>
          <Line options={options} data={data} />;
        </div>
      </>
    );
  }
}

export default LineChartGetEight;

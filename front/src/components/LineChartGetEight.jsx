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
import { Line, getElementAtEvent } from "react-chartjs-2";
import React, { useState, useEffect, useRef } from "react";
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
  const [lowerValue, setLowerValue] = useState(0);
  const [upperValue, setUpperValue] = useState(5);
  const [bestThree, setBestThree] = useState([]);

  const chartRef = useRef();
  const onClick = (event) => {
    if (getElementAtEvent(chartRef.current, event).length === 0) return;
    console.log(getElementAtEvent(chartRef.current, event));
    console.log(getElementAtEvent(chartRef.current, event)[0].index);
    setLowerValue(getElementAtEvent(chartRef.current, event)[0].index);
    setUpperValue(getElementAtEvent(chartRef.current, event)[0].index + 0.9);
  };

  useEffect(() => {
    let ignore = false;
    var labels = [0, 1, 2, 3, 4, 5];
    var salesPerRating = [0, 0, 0, 0, 0, 0];
    var temporalIndex = -1;

    async function startFetching() {
      const json = await props.getData(0, 5);
      // console.log("ocho: ", json);
      if (!ignore) {
        if (json.sales) {
          for (let i = 0; i < json.sales.length; i++) {
            temporalIndex = Math.floor(json.sales[i].rating);
            salesPerRating[temporalIndex] =
              salesPerRating[temporalIndex] + json.sales[i].totalSales;
          }
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
  }, [true]);

  useEffect(() => {
    let ignore = false;
    var bestThreeTemporal = [];
    var length = 3;

    async function startFetching() {
      const json = await props.getData(lowerValue, upperValue);
      if (!ignore) {
        if (json.sales) {
          bestThreeTemporal = [];
          if (json.sales.length < 3) {
            length = json.sales.length;
          }

          for (let i = 0; i < length; i++) {
            bestThreeTemporal.push(json.sales[i]);
          }

          setBestThree(bestThreeTemporal);
        }
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, [lowerValue, upperValue]);

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
          <div className='chart'>
            <Line
              ref={chartRef}
              options={options}
              data={data}
              onClick={onClick}
            />
          </div>
          <div className='best-three'>
            {bestThree.length !== 0 ? (
              <>
                {lowerValue === 0 && upperValue === 5 ? (
                  <h3>
                    Los mejores juegos de todas las calificaciones por ventas
                    son:
                  </h3>
                ) : (
                  <h3>
                    Los mejores juegos de {lowerValue} estrellas por ventas son:
                  </h3>
                )}

                <ol>
                  {bestThree.map((gameObject) => {
                    return (
                      <li key={gameObject.game}>
                        {gameObject.game} {gameObject.rating} con{" "}
                        {gameObject.totalSales.toFixed(2)} MDU
                      </li>
                    );
                  })}
                </ol>
              </>
            ) : (
              <h3>No hay juegos en esta categoría</h3>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default LineChartGetEight;

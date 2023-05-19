import React, { useState, useEffect } from "react";
import "./css/SimpleMetrics.css";
import SingleMetric from "./SingleMetric";
import {
  FaCalendar,
  FaCheckSquare,
  FaFlag,
  FaGamepad,
  FaStar,
} from "react-icons/fa";
import { GiGameConsole, GiConsoleController } from "react-icons/gi";

function SimpleMetrics({ getData }) {
  const [data, setData] = useState({});

  async function startFetching() {
    let json = await getData();
    console.log("simple metrics: ", json);
    setData(json);
  }

  useEffect(() => {
    startFetching();
  }, [true]);

  return (
    <div className='simple-metrics'>
      <SingleMetric
        // 'El videojuego más vendido'
        title='Más vendido'
        Icon={FaFlag}
        value={data.topGame}
      />
      <SingleMetric
        // 'La plataforma que más vendió videojuegos'
        title='Mejor Plataforma'
        Icon={GiGameConsole}
        value={data.topPlatform}
      />
      <SingleMetric
        // 'Año con mayores ventas'
        title='Mejor Año'
        Icon={FaCalendar}
        value={data.topYear}
      />
      <SingleMetric
        // 'El videojuego más deseado'
        title='Más deseado'
        Icon={FaStar}
        value={data.topWishlistedGame}
      />
      <SingleMetric
        // 'Categoría que más se vende'
        title='Mejor categoría'
        Icon={FaCheckSquare}
        value={data.topGenre}
      />
      <SingleMetric
        // 'Promedio ventas de videojuegos'
        title='Ventas promedio'
        Icon={FaGamepad}
        value={data.totalAverageSales}
      />
    </div>
  );
}

export default SimpleMetrics;

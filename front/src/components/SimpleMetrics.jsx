import React, { useState, useEffect } from "react";
import "./css/SimpleMetrics.css";
import SingleMetric from "./SingleMetric";

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
      <SingleMetric title='El videojuego más vendido' value={data.topGame} />
      <SingleMetric
        title='La plataforma que más vendió videojuegos'
        value={data.topPlatform}
      />
      <SingleMetric title='Año con mayores ventas' value={data.topYear} />
      <SingleMetric title='El videojuego más deseado' value={data.topGenre} />
      <SingleMetric
        title='Categoría que más se vende'
        value={data.topWishlistedGame}
      />
      <SingleMetric
        title='Promedio ventas de videojuegos'
        value={data.totalAverageSales}
      />
    </div>
  );
}

export default SimpleMetrics;

import React, { useEffect, useState, memo } from "react";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import "./css/MapChart.css";

const url_backend = import.meta.env.VITE_URL_API;

const geoUrl = "features.json";

const colorScale = scaleLinear()
  .domain([81000, 87000])
  .range(["#ffedea", "#0052ff"]);

const countriesTable = {
  MX: "MEX",
  JP: "JPN",
  US: "USA",
  UK: "GBR",
  AU: "AUS",
  CA: "CAN",
  FR: "FRA",
  DE: "DEU",
  ES: "ESP",
  AR: "ARG",
  CO: "COL",
};

const MapChart = (props) => {
  const [data, setData] = useState({});
  const [content, setContent] = useState("Todos");

  const startFetching = async () => {
    const json = await props.getData();
    if (json.gameSales) {
      for (let i = 0; i < json.gameSales.length; i++) {
        setData((prevState) => {
          return {
            ...prevState,
            [countriesTable[json.gameSales[i].country]]:
              json.gameSales[i].totalSales,
          };
        });
      }
    }
    console.log("mapa: ", json);
    console.log("data: ", data);
  };

  useEffect(() => {
    startFetching();
  }, [true]);

  return (
    <div className='map-all'>
      {content !== "Todos" ? (
        <h2>
          <b>{content}</b>
          {" MDU"}
        </h2>
      ) : (
        <h2>Ventas de videojuegos por país en Millones de Unidades (MDU)</h2>
      )}

      <div className='map'>
        <ComposableMap
          projectionConfig={{
            rotate: [0, 0, 0],
            scale: 120,
          }}
          className='w-full '
        >
          <ZoomableGroup zoom={1.5} center={[0, 0]}>
            {Object.keys(data).length > 0 && (
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const d = data[geo.id];
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={d ? colorScale(d) : "#888888"}
                        onMouseEnter={() => {
                          setContent(
                            `Ventas de ${geo.properties.name}: ${
                              d ? d.toFixed(2) : 0
                            }`
                          );
                        }}
                        onMouseLeave={() => {
                          setContent("Todos");
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            )}
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
};

export default memo(MapChart);

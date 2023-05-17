import React, { useEffect, useState } from "react";
import "./css/TableGetFive.css";

function TableGetFive(props) {
  let [value, setValue] = useState("MX_US_JP_UK_AU_CA_FR_DE_ES_AR_CO");
  let [data, setData] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      const json = await props.getData(value);
      if (!ignore) {
        setData(json.genres);
        console.log("Cinco ", data);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className='table-get-five'>
      <h3>La venta de unidades de videojuegos por género por país</h3>
      <div className='selector'>
        <label>Elige un país:</label>
        <select value={value} onChange={handleChange}>
          <option value='MX_US_JP_UK_AU_CA_FR_DE_ES_AR_CO'>Todos</option>
          <option value='MX'>Mexico</option>
          <option value='US'>Estados Unidos</option>
          <option value='JP'>Japón</option>
          <option value='UK'>Reino Unido</option>
          <option value='AU'>Australia</option>
          <option value='CA'>Canadá</option>
          <option value='FR'>Francia</option>
          <option value='DE'>Alemania</option>
          <option value='ES'>España</option>
          <option value='AR'>Argentina</option>
          <option value='CO'>Colombia</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Género</th>
            <th>Total Ventas (MDU)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.genre}</td>
                <td>{item.totalSales.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableGetFive;

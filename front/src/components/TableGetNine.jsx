import React, { useEffect, useState } from "react";
import "./css/TableGetNine.css";

function TableGetNine(props) {
  let [data, setData] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      const json = await props.getData();
      if (!ignore) {
        setData(json.wishlist.slice(0, 20));
        console.log("Nueve: ", data);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, [true]);

  return (
    <div className='table-get-nine'>
      <h3>Los 20 videojuegos más deseados</h3>
      <table>
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Título</th>
            <th>No. de personas que desean este juego</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.game}</td>
                <td>{item.wishlist}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableGetNine;

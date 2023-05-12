import "./css/Charts.css";
import PieChart from "./components/PieChart";
import { getUno } from "./api/apiCalls";
import BarChart from "./components/BarChart";

export function Charts() {
  return (
    <>
      <div className='chart-container'>
        <PieChart getData={getUno} />
        <BarChart getData={getUno} />
        <p className='creators'>
          Hecho por: Iván Vega Matías y Carlos Natanael Lecona Valdespino
        </p>
      </div>
    </>
  );
}

export default Charts;

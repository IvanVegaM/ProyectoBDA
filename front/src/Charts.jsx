import "./css/Charts.css";
import {
  getCinco,
  getDos,
  getNueve,
  getOcho,
  getSeis,
  getSiete,
  getTres,
  getUno,
} from "./api/apiCalls";
import PieChartGetOne from "./components/PieChartGetOne";
import BarChartGetTwo from "./components/BarChartGetTwo";
import LineChartGetThree from "./components/LineChartGetThree";
import LineChartGetSix from "./components/LineChartGetSix";
import TableGetFive from "./components/TableGetFive";
import TableGetNine from "./components/TableGetNine";
import BarChartGetSeven from "./components/BarChartGetSeven";
import LineChartGetEight from "./components/LineChartGetEight";
import MapChart from "./components/MapChart";

export function Charts() {
  return (
    <>
      <div className='chart-container'>
        <div className='first-container'>
          <PieChartGetOne getData={getUno} />
          <LineChartGetThree getData={getTres} />
        </div>
        <BarChartGetTwo getData={getDos} />
        <MapChart pais='Todos' />
        <LineChartGetSix getData={getSeis} />
        <div className='tables'>
          <TableGetFive getData={getCinco} />
          <TableGetNine getData={getNueve} />
        </div>
        <BarChartGetSeven getData={getSiete} />
        <LineChartGetEight getData={getOcho} />
        <p className='creators'>
          Hecho por: Iván Vega Matías y Carlos Natanael Lecona Valdespino
        </p>
      </div>
    </>
  );
}

export default Charts;

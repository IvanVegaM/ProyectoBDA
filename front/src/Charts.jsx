import "./css/Charts.css";
import {
  getCinco,
  getCuatro,
  getDos,
  getNueve,
  getOcho,
  getSeis,
  getSiete,
  getTop,
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
import SimpleMetrics from "./components/SimpleMetrics";

export function Charts() {
  return (
    <>
      <div className='chart-container'>
        <SimpleMetrics getData={getTop} />
        <div className='first-container'>
          <PieChartGetOne getData={getUno} />
          <LineChartGetThree getData={getTres} />
        </div>
        <BarChartGetTwo getData={getDos} />
        <MapChart getData={getCuatro} />
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

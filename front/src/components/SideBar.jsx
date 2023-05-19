import "./css/SideBar.css";
import UPLogo from "../assets/up.png";

function SideBar() {
  return (
    <div className='sidebar'>
      <img src={UPLogo} className='logo' />
      <p className='subtitle'>Facultad de Ingeniería</p>
      <p className='subtitle'>Bases de Datos Avanzadas</p>
      <p className='subtitle bold'>Tecnología usada: </p>
      <p className='subtitle bold'>- Front:</p>
      <p className='subtitle other'>- React</p>
      <p className='subtitle other'>- Javascript </p>
      <p className='subtitle other'>- react-chartjs-2</p>
      <p className='subtitle bold'>- Back:</p>
      <p className='subtitle other'>- Express</p>
      <p className='subtitle other'>- Typescript</p>
      <p className='subtitle bold'>- Database:</p>
      <p className='subtitle other'>- MySQL</p>
    </div>
  );
}

export default SideBar;

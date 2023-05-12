import "./css/SideBar.css";
import UPLogo from "../assets/up.png";

function SideBar() {
  return (
    <div className='sidebar'>
      <img src={UPLogo} className='logo' />
      <p className='subtitle'>Facultad de Ingeniería</p>
      <p className='subtitle'>Bases de Datos Avanzadas</p>
      <p className='subtitle bold'>Ejemplo de acceso a datos</p>
      <p className='subtitle'>Tecnología usada: </p>
    </div>
  );
}

export default SideBar;

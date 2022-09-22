import logoh from './Hotelia_horizontal_blanco.svg';
import {Link} from 'react-router-dom';
import "./Navbar.css";
function Navbar(){
    return(
        <header>
            <div className="logo">
                <img src={logoh} alt="Logo Hotelia blanco"/>
            </div>
                <nav>
                <Link to="/" className="menu-item">Inicio</Link>
                <Link to="/Habitaciones" className="menu-item">habitacion</Link>
                <Link to="/Habitaciones/1" className="menu-item">habitacion x</Link>

                <Link to="/login" className="menu-item">
                    <i className="fa solid fa-user"></i>
                    Iniciar Sesion
                    </Link>
                </nav>
            
        </header>
    )
}
export default Navbar;
import logo from "../assets/logo.jpg"
import { CartWidget } from "./CartWidget"
import{Link} from 'react-router-dom'

export const Navbar = () => {

    let productosEnCarrito = 0

return (

    <header className="header">

        <div className="headerContainer">

         <nav>
            <ul className="numerador">
             
            <li>
                <CartWidget />
            </li>
            <li> <p className="cero">{productosEnCarrito}</p></li>
            </ul>
           
            <img className="logo" src={logo}></img>
            <ul className="Navbar">
            <Link className="linkNavbar" to="/">Inicio</Link>
            <Link className="linkNavbar" to="/productos/figuras anime">Figuras de Anime</Link>
            <Link className="linkNavbar" to="/productos/macetas">Macetas</Link>
            <Link className="linkNavbar" to="/productos/varios">Varios</Link>
             <Link className="linkNavbar" to= "/QuienesSomos">Quienes Somos</Link>
             <Link className="linkNavbar" to= "/Contacto"> Contacto</Link>
          
            </ul>
             
             
         </nav>
        </div>
    </header>
)


}
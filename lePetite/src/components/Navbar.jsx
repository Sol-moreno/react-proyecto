import logo from "../assets/logo.jpg"
import { CartWidget } from "./CartWidget"

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
            <li className="linkNavbar">Inicio</li>
            <li className="linkNavbar">Productos</li>
             <li className="linkNavbar">Quienes Somos</li>
             <li className="linkNavbar"> Contacto</li>
          
            </ul>
             
             
         </nav>
        </div>
    </header>
)


}
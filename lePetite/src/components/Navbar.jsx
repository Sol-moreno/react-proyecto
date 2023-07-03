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
            <li><a href="" className="linkNavbar">Home</a></li>
            <li><a href="" className="linkNavbar">Productos</a></li>
             <li><a href=""  className="linkNavbar">Quienes Somos</a></li>
             <li><a href="" className="linkNavbar"> Contacto</a></li>
          
            </ul>
             
             
         </nav>
        </div>
    </header>
)


}
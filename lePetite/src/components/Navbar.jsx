import logo from "../assets/logo.jpg"
import { CartWidget } from "./CartWidget"


export const Navbar = () => {

    let productosEnCarrito = 0

return (

    <header className="header">

        <div className="headerContainer">

         <nav>
            
            <img className="logo" src={logo}></img>
            <ul className="Navbar">
            <li><a className="linkNavbar">Home</a></li>
            <li><a className="linkNavbar">Productos</a></li>
             <li><a className="linkNavbar">Quienes Somos</a></li>
             <li><a className="linkNavbar"> Contacto</a></li>
            <li>
                <CartWidget />
            </li>
            <li>
            <p>{productosEnCarrito}</p>
            </li>
            </ul>
             
             
         </nav>
        </div>
    </header>
)


}
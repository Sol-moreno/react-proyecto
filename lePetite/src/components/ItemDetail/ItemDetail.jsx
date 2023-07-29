import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState (1)

    return (
        <div className="container my-5">
            <h2>{item.nombre}</h2>
            <div className="bodyCard">
            <img  className='imagencard'src={item.img} alt={item.nombre}/>
            <p className="descripcionCard">{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>

            <ItemCount
             max={item.stock}
             counter={cantidad}
             setCounter= {setCantidad}
            
            />

            <button className="btn btn-success m-2"> Agregar al Carrito</button>
            
             
            </div>

          </div>
    )
        }



export default ItemDetail
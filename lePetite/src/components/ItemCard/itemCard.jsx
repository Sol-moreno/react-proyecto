import { Link } from "react-router-dom"



const ItemCard = ({item}) => {

    return (
        <div className='col-3 m-5'>
            <h4 className='titulocard'>{item.nombre}</h4>
            <img className='imagencard' src={item.img} alt={item.nombre}/>
            <p className="precio">Precio: ${item.precio}</p>
            <Link to={`/detail/${item.id}`} className='btn btn-success'>Ver más</Link>
        </div>
    )
}

export default ItemCard
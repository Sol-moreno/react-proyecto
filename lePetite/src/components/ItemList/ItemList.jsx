


 export const ItemListContainer =({productos}) => {

return (
    <div className='conteiner'>
    <h2>
        PRODUCTOS
    </h2>
    <hr />

    <div className='row'> 
    { 
    productos.map ((prod) =>(
    <div key={prod.id} className='col-3 m-2'>
        <h4>{prod.nombre}</h4>
        <img className='imagencard' src={prod.img} alt="prod.imagen" />
        <p>{prod.descripcion}</p>
        <p>Precio:${prod.precio}</p>
        <button className='btn btn-primary'> Agregar al Carrito</button>
    </div>




    )
    
    
    
    )

    }
     </div>


</div>






)
}










export default ItemListContainer


const ItemCount =({max, counter, setCounter}) => {

    const handleRestar =() => {
       counter > 1 &&  setCounter (counter - 1)
    }

    const handleSumar =() =>{
       counter < max && setCounter (counter + 1)
    }

return(

    <div>
         <button onClick={handleRestar} className="btn btn-outline-success"> - </button>
         <span className="mx-2"> {counter} </span>
         <button onClick={handleSumar} className="btn btn-outline-success"> + </button>
        
         </div>
)




}

export default ItemCount
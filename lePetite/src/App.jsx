
import { Navbar } from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import QuienesSomos from './components/QuienesSomos'
import Contacto from './components/Contacto'
 import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailConteiner'
import { CartContext } from './components/Contexto/CartContext'
import './App.css'

function App() {

  return (
    <CartContext.Provider>
         <BrowserRouter>
      <Navbar/>

         <Routes>
            
         <Route path= "/" element= {<ItemListContainer/>}  />
         <Route path= "/productos/:categoryId" element= {<ItemListContainer/>}  />
         <Route path= "/detail/:itemId" element= {<ItemDetailContainer/>}  />
         <Route path= "/Contacto" element= {<Contacto/>}  />
         <Route path= "/QuienesSomos" element= {<QuienesSomos/>}  />
         <Route path= "*" element= {<Navigate to ="/"/>}  />
          

         </Routes>

             
         </BrowserRouter>

    </CartContext.Provider>
  ) 
}

   


export default App

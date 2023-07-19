
import { Navbar } from './components/Navbar'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import QuienesSomos from './components/QuienesSomos'
import Contacto from './components/Contacto'
 import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailConteiner'

function App() {

  return (

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

       
  

         
     
  

    
  )
}


export default App

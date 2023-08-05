
import { Navbar } from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import QuienesSomos from './components/QuienesSomos'
import Contacto from './components/Contacto'
 import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailConteiner'
import Footer from './components/footer/footer'
// import CartView from './components/CartView/CartView'
import './App.css'




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
         {/* { <Route path="/cart" element={ <CartView /> }/> } */}
         <Route path= "*" element= {<Navigate to ="/"/>}  />
          

         </Routes>

         <Footer/>
      
         </BrowserRouter>

        
      
     
  ) 
}

   


export default App


import { Navbar } from './components/Navbar'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { QuienesSomos } from './components/QuienesSomos'



function App() {

  return (
           <div>

             <Navbar/>
             <ItemListContainer Productos= {"Productos"}/>
             <QuienesSomos/>
           </div>

       
  

         
     
  

    
  )
}


export default App

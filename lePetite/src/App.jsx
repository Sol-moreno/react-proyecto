
import { Navbar } from './components/Navbar'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



function App() {
  
  return (
  
      <div>
        <Navbar />
        <ItemListContainer Gracias= {"Los esperamos"} />

       
      </div>
      
    

    
  )
}


export default App

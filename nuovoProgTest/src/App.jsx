import { useState } from 'react'
import './App.css'
import DivGenerico from './components/DivGenerico.jsx';
import Navbar from './components/Navbar.jsx';




function App() {
  const [contatore, gestisciContatore] = useState(1);
  const mioNome = "Dario";
  

  return ( 
    <>
      <Navbar></Navbar>
      <h1>Ciao a tutti da parte di {mioNome}</h1>
      <h3>Questo è un h3</h3>
      <button className='btn btn-danger' onClick={()=>gestisciContatore((contatore) => contatore * 4)}>Click {contatore}</button>
      <DivGenerico />
      
    </>
  )
}

export default App

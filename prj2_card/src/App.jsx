import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <div className="card-container">

        <Card
          titolo="Torino"
          descrizione="Città ai piedi delle Alpi attraversata dal fiume Po"
          image="https://images.unsplash.com/photo-1502113130129-259236d6fabd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          isDisponibile={true}>

          {/* Att: questo sotto va a valorizzare la prop children definita nel child */}
          Biglietti disponibili 200

        </Card>

        <Card
          titolo="Napoli"
          descrizione="Città situata al centro del Mediterraneo"
          image="https://images.unsplash.com/photo-1642263975707-8118ed3ff145?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          isDisponibile={false}></Card>

        <Card
          titolo="Roma"
          descrizione="Caput Mundi"
          image="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          isDisponibile={false}></Card>
      </div>
    </>
  )
}

export default App

import { useState } from 'react';
import './App.css'
import Card from './components/Card'

function App() {
  const prodotti = [
    {
      id: 0,
      nomeProdotto: 'Smartphone',
      prezzo: 650,
      descrizione: 'Con questo non chiami neppure te stesso',
      image: 'https://images.unsplash.com/photo-1618680551746-83925d89838b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isDisponibile: true
    },
    {
      id: 1,
      nomeProdotto: 'Laptop',
      prezzo: 750,
      descrizione: 'Questo pc è solo bello da vedere e il cappuccino non è incluso',
      image: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isDisponibile: false
    },
    {
      id: 2,
      nomeProdotto: 'Tablet',
      prezzo: 850,
      descrizione: 'Senza la penna non ci fai niente. Compra la penna, compra la penna',
      image: 'https://images.unsplash.com/photo-1623126908029-58cb08a2b272?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isDisponibile: false
    }
  ]

  function handleClick(event){
    console.log("Sto utilizzando una funzione");
    console.log(event);
  }

  function handleChange(event){
    console.log(event.target.value);
    console.log(event); 
  }

  function sommaNum(num1, num2){
    let somma = num1 + num2
    console.log(somma);
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(event);
    event.stopPropagation();
  }

  // USE STATE: si chiama Hook, è tipico di react. Come tutti gli hook mi permette di agganciarmi ad altre funzionalità.
  //Lo use state lavora con una variabile (count) e una funzione (setCount) per modificare il valore di partenza (0) della varibile
  //In sostanza non vado a modificare il valore della variabile ma modifico proprio lo stato di quella variabile.

  //      var   funz
  const [count, setCount] = useState(1);

  // posso anche controllare lo state di un oggetto 
  const[user, setUser] = useState({nome: "Dario", eta: 36});

  const updateUser = () =>{
    let updatedUser = {...user, nome: "Anna"};
    setUser(updatedUser);
    console.log(user);
  }

  //posso controllare anche lo state di un array
  
  return (
    <>
      <div className='card-container'>
        {/* Att: per poter utilizzare un component devo importarlo in alto */}
        {/* Le props che ho definito nel component Child diventano attributi del selettore */}
        {/* <Card 
        nomeProdotto={prodotti[0].nomeProdotto}
        prezzo={prodotti[0].prezzo}
        descrizione={prodotti[0].descrizione}
        image={prodotti[0].image}
        isDisponibile={prodotti[0].isDisponibile}></Card> */}

        {/* <Card 
        nomeProdotto={'Tablet'}
        prezzo={750}
        image={'https://images.unsplash.com/photo-1623126908029-58cb08a2b272?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        descrizione={'A schermo grande corrispondono inferiori possibilità'}
        isDisponibile={false}></Card> */}

        {/* <Card
        nomeProdotto={'Laptop'}
        prezzo={850}
        image={'https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        descrizione={'Il cappuccino in foto non è incluso'}
        isDisponibile={true}
        >
         * Questo che scrivo tra i selettori deve essere intercettato dalla props children definita nel child *
          Ciao dal children
        </Card> */}

        {prodotti.map((prodotto) => (
          <Card
          key={prodotto.id}
          nomeProdotto={prodotto.nomeProdotto}
          prezzo={prodotto.prezzo}
          image={prodotto.image}
          descrizione={prodotto.descrizione}
          isDisponibile={prodotto.isDisponibile}>          
          </Card>
        ))}
        </div>
      
        <br />
        <h3>Lista prodotti non disponibili</h3>

        {prodotti.filter(prod => !prod.isDisponibile)
        .map((prod) => (
          <div key={prod.id}> 
          {prod.nomeProdotto}
          </div>
        ))}

      
        <hr />

        <h3>Eventi Basic</h3>

        {/* Posso gestire gli eventi con delle funzioni anonime */}
        <button onClick={() =>{
          alert("Ciao dal click. Il primo prodotto è: " + prodotti[0].nomeProdotto)
        }}>Clicca per alert</button>

        {/* Posso gestire con una funzione definita */}

        <button onClick={handleClick}>Cliccami</button>

        <hr />

        <input type="text" onChange={handleChange} placeholder='scrivi'/>

        <hr />

        <button onClick={()=>{
          sommaNum(7, 3);
        }}>Somma</button>

        {/* Gestione semplice dei form */}
        
        <hr />

        <form onSubmit={handleSubmit}>
          <button type='submit'>Sub</button>
        </form>

        {/* USE STATE */}
        <hr />
        <button onClick={()=>{
          setCount((count) => count*5)
        }}>Modifica State</button>
        <p>Attualmente lo state vale: {count}</p>


        <button onClick={updateUser}>Modifica lo user</button>

    </>
  )
}

export default App

import "./Navbar.css"

function Navbar(){
    // In questo punto posso scrivere come se fosse semplice javascript
    let pagina1 = "Homepage";
    let mioNome = "Paolo";

    return(
        <>
            <ul>
                {/* Posso richiamare una variabile dichiarata in alto attraverso l'uso delle parentesi graffe */}
                <li>{pagina1}</li>
                <li>Chi Siamo</li>
                <li>Dove Siamo</li>
                <li>Contattaci</li>
            </ul>

            <p>{mioNome == "Dario"? "Ciao Dario, benvenuto": "Mi spiace, non ti conosco"}</p>
        </>
    )
}

// Per poter utilizzare altrove il component Navbar lo devo esportare
export default Navbar
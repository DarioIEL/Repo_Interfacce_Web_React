import "./Card.css"
// function Card(props){

//     const titolo = props.titolo;
//     const descrizione = props.descrizione;
//     //Att: a sx del = c'è il nome della prop del child, a dx del = c'è il nome della prop nel parent
//     const img = props.image


//     return(
//        <div className="card">
//             <div className="card-image">
//                 <img src={img} alt="" />
//             </div>

//             <div>
//                 <h2> {titolo} </h2>
//                 <p>{descrizione}</p>
//             </div>
//        </div>
//     )
// }

// Esiste un modo ancora più "pulito" di passare informazioni al child. tra le parentesi quadre passo direttamente un oggetto , quindi non ho puiù la necessità di assegnare delle proprietà.
//Se uso la parola chiave children posso passare delle proprietà utilizzando lo spazio tra i campi del selettore del component all'interno del parent
function Card({titolo, image, descrizione, children, isDisponibile}){
     return(
       <div className={`card ${isDisponibile ? "bgGreen" : "bgRed"}`}>
            <div className="card-image">
                <img src={image} alt="" />
            </div>

            <div>
                <h2> {titolo} </h2>
                <p>{descrizione}</p>
                <p> <strong>{children}</strong></p>

                {/* {isDisponibile ? <span>Disponibile all'acquisto</span> : <span> Non disponibile all'acquisto </span> }  */}

                {/* <span>{isDisponibile ? "Disponibile all'acquisto":"Non disponibile"}</span> */}

                {isDisponibile && <span>Disponibile all'acquisto</span>}
                {!isDisponibile && <span>Non disponibile all'acquisto</span>}

                <br />

                {isDisponibile && <button className="btn btn-primary">Compra</button>}
            </div>
       </div>
    )
}

export default Card
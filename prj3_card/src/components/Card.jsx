import './Card.css'

function Card({nomeProdotto, prezzo, descrizione, image, children, isDisponibile}){

    const styles = {
        disponibile: {
            color: 'green',
            fontWeight: 'normal'
        },
        esaurito:{
            color: 'red',
            fontWeight: 'bold',
            textDecoration: 'underline'
        }
    }

    return(
        
            <div className={`card ${isDisponibile? 'bgGreen': 'bgRed'}`}>
                <div className="card-image">
                    <img src={image} alt="" />
                </div>
                <div>
                    <h2>{nomeProdotto}</h2>
                    <p>Prezzo: € {prezzo}</p>
                    <p>{descrizione}</p>
                    <p><strong>{children}</strong></p>
                    <p className={isDisponibile?'':'txtRed'}>Disponibilità: {isDisponibile? 'Disponibile': 'Esaurito'}</p>
                    {/* GIOCO CON GLI STYLE IN LINEA */}
                    {/* <p style={isDisponibile? {}: {color: 'red'}}>Disponibilità: {isDisponibile? 'Disponibile': 'Esaurito'}</p> */}
                    {/* <p style={{color: isDisponibile? 'green': 'red'}}>Disponibilità: {isDisponibile? 'Disponibile': 'Esaurito'}</p> */}
                    <p style={isDisponibile? styles.disponibile: styles.esaurito}>Disponibilità: {isDisponibile? 'Disponibile': 'Esaurito'}</p>


                </div>
            </div>
        
    )
}

export default Card
import "./Container.css"

function Container(){
    let mioStyle1 = { height: "100px", width: "auto"}

    let x = 9;

    let mioStyle2 = {
        height: x < 10 ? "100px": "300px"
    }

    let mioNome = "Dario"

    return(
        <>
            
        {/* Gioco un po' con lo style */}
        {/* OPZIONE 1 */}
        {/* Att: la propr style è un oggetto, ecco perché uso le parentesi graffe */}
        <img style={
            {
                height: "200px", 
                width: "auto"
            }
            } src="./src/assets/torino.jpg" alt="" />
        
        {/* OPZIONE 2 - posso aggiungere dello stile in linea semplicemente dichiarando e utilizzando degli oggetti */}
        <img style={mioStyle1} src="./src/assets/torino.jpg" alt="" />
        <img style={mioStyle2} src="./src/assets/torino.jpg" alt="" />

        <hr />

        {/* <img className="styleImg rounded" src="./src/assets/torino.jpg" alt="" /> */}

        {/* Applico una classe condizionata al valore di una variabile dichiarata in alto */}
        <img className={`styleImg ${x < 10? "rounded": ""} `} src="./src/assets/torino.jpg" alt="" />
        

        <h3>Ciao, mi chiamo {mioNome}</h3>


        </>
    )
}

export default Container
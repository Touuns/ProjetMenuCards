import "./cards.css"
function Card(props) {

    // Grace aux props, je récupère les propriété que j'ai crée dans mon components, importé dans mon App.js ligne 76 à 104 <Cards/>
    return(
        <div className="imgAndCards">
            <img src={props.src} alt="" ></img>
            <div className="mesCartes">
                <h2>{props.title}</h2>
                <h3 className="leH3SousTitre">{props.sousTitre}</h3>
                <h3 className="leH3Blanc">Pays</h3>
                <button >DETAILS</button>
            </div>
    
        </div>
    )
    
}

export default Card
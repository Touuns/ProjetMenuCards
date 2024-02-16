
import "./nav.css"

function Nav() {
    return(
        <div className="maNavBar">
            <div className="titleGauche">
                <p>The <span id="destination">Destination</span> DB</p>
            </div>
            <div className="titleDroite">
                <p id="home">Home</p>
                <p id="about">About</p>
            </div>
        </div>
    )
    
}

export default Nav





// export default function Message({message}) {
//     return(
//         <div>
//             <h2>Boite à message</h2>
//             <p>{message ? message : "Il n'y a pas de message"}</p> {/* opérateur ternaire */}
//         </div>
//     )

// }
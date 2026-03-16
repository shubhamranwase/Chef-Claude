import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKitchenSet } from '@fortawesome/free-solid-svg-icons'

export default function Header(){
    return(
        <>
        <div className="nav-container">
            <div className="nav-icon"><FontAwesomeIcon icon={faKitchenSet} /></div>
            <h1 className="nav-heading">Chef Claude</h1>
        </div>
        </>
    )
}
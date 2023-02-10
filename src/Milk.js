import pic from './pics/milk.jpg'
import { NavLink } from 'react-router-dom'

function Milk() {
    return (
        <div className="milk">   
            <img src = {pic} alt = "" width="70%"/>
            <div className='navigation'>
                <p>"Diabetes"</p>
                <NavLink exact to="/">Back</NavLink>
            </div>
            <p></p>
        </div>
    )
}

export default Milk
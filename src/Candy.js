import pic from './pics/candy.jpg'
import { NavLink } from 'react-router-dom'

function Candy() {
    return (
        <div className="candy">   
            <img src = {pic} alt = "" width="100%"/>

            <div className='navigation'>
                <p>"Fat Free!"</p>
                <NavLink exact to="/">Back</NavLink>
            </div>
        </div>
    )
}

export default Candy
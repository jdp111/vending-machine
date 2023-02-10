import pic from './pics/cookie.jpg'
import { NavLink } from 'react-router-dom'


function Cookie() {
    return (
        <div className="cookie">   
            <img src = {pic} alt = "" width="50%"/>
            
            <div className='navigation'>
                <p>"Part of a complete breakfast"</p>
                <NavLink exact to="/">Back</NavLink>
            </div>
        </div>
    )
}

export default Cookie
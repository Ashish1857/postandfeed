import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const Navigation=()=>{
    const history = useHistory();
    const loggedInUser = useSelector(state=> state.loggedInUser)

    return (
        <div className="nav-wrapper">
            <span className="userName">Hi, {loggedInUser.name} </span>
            <ul className="nav">
                <li className="nav-item"><Link class="nav-link" to= "/feed"> My Feed</Link></li>
                <li className="nav-item"><Link class="nav-link" to="/post"> My Post</Link></li>
           </ul>   
           <span 
           className="logout"
            onClick={()=>{
               localStorage.clear();
               history.push('/')
           }}>
                Log out
             </span>
         </div>
    )
}

export default Navigation;
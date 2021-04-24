import React from 'react';
import { Link } from 'react-router-dom';

const Navigation=()=>{

    return (
        <div>
            <ul className="nav">
                <li className="nav-item"><Link class="nav-link" to= "/feed"> My Feed</Link></li>
                <li className="nav-item"><Link class="nav-link" to="/post"> My Post</Link></li>
           </ul>   
         </div>
    )
}

export default Navigation;
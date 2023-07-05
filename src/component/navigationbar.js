import React from 'react';
import "../App.css";
import { Link} from 'react-router-dom';

function NavigationBar() {
    return (
        <>
<nav>
    <ul className='navlinks'>
    <li><Link to="/" exact >Home</Link></li>
       <li><Link to="/about">About</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/admissions">Admissions</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
        
    </ul>
</nav>

        </>
    )
}
export default NavigationBar;

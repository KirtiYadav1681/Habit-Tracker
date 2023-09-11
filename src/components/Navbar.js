import React from 'react';
import '../Style.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link style={{textDecoration:'none'}} to='/'><h1>Habit Tracker</h1></Link>
    </div>
  )
}

export default Navbar
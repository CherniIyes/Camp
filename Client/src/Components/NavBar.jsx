import React from 'react';
import logo1 from "../pics/logoo.png";
import logo2 from "../pics/logo2.png";
import { BiAtom } from 'react-icons/bi';
import "./nav.css";

function NavBar() {
  return (
    <div className='stic'>
      <div className='Header'>
        <div className='logoo'>
          <BiAtom />
          <img className='picc' src={logo2} alt="Logo" />
        </div>
        <div>
          <ul className='nav'>
            <li className='lii'>Home</li>
            <li className='lii'>Add</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <div className="nav-div">
      <ul className="home-div">
        <li>
          <Link to="/"> </Link>
        </li>
      </ul>
    </div>
  </>
);
export default Navbar;

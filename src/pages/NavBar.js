import React from 'react';
import { Link } from 'react-router-dom';

const HeaderStyle = {
  color: 'hotpink',
};

const NavBar = () => (
  <>
    <nav className="navigation-container">
      <h1 style={HeaderStyle}>
        Math
        <span style={{ color: '#f5913e' }}>Magicians</span>
      </h1>
      <ul className="nav-links">
        <li className="link"><Link to="/">Home</Link></li>
        <li className="link"><Link to="/calculator">Calculator</Link></li>
        <li className="link"><Link to="/quote">Quote</Link></li>
      </ul>
    </nav>
  </>
);
export default NavBar;

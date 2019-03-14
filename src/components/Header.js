import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
return(
  <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link" href="#">React Test <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link  to="/product/new" className="nav-link" href="#">Ajouter</Link>
      </li>
      <li className="nav-item">
      </li>
    </ul>
  </div>
  </nav>
)
}

export default Header;
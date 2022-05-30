import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/ShoppingCart">
              <img src="https://cdn-icons-png.flaticon.com/512/126/126510.png" alt="Shopping Cart" />
              Home
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;

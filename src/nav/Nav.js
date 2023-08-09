// Nav.js
import logo from './logo.png';
import './Nav.css'
function Nav() {
  return (
    <nav>
      <img src={logo} className="nav-logo" alt="Logo" />
    </nav>
  );
}

export default Nav;
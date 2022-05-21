import { Link } from "react-router-dom";
import {FaReact} from "react-icons/fa";
const Header = () => {
  return (
    <header>
    <nav className="nav-bar">
      <h1 className="logo"><Link to="/"><FaReact/> <span>POSTS APP</span></Link></h1>
      <ul className="nav-menu">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
      </ul>
  </nav>
    </header>
  );
};

export default Header;

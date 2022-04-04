import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from "@fortawesome/free-solid-svg-icons"
import "./style.css";
import logo from "../../assets/hashedin_logo.png";

const Navbar: React.FC = () => {
  return (
    // <nav className='navbar'>
    //   <Link to='/'>Home</Link>
    //   <Link to='/courses'>Courses</Link>
    //   <Link to='/profile'>Profile</Link>
    // </nav>
    <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
            <ul className="nav me-auto">
            <a>
            <Link to='/'>
                <img src={logo} className="d-inline-block align-top" alt="" />
            </Link>
            </a>
            </ul>
            <ul className="nav">
            <li className="nav-item pt-2"><Link className="navbarlinks" to='/courses'>Courses</Link></li>
            <li className="nav-item pt-2 pl-3"><Link className="navbarlinks" to='/wishlist'>Wishlist</Link></li>
            </ul>
            <ul style={{paddingLeft: "red"}} className ="nav">
            <li className="nav-item"><Link to='/courses' className="nav-link link-dark px-2" ><FontAwesomeIcon icon={faCartShopping} /></Link></li>
            <li className="nav-item"><Link to='/profile' className="nav-link link-dark px-2" ><FontAwesomeIcon icon={faUser} /></Link></li>
            </ul>
        </div>
    </nav>
  );
};
export default Navbar;


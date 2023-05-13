import { Link } from 'react-router-dom';
import logo from '../assets/unnamed.png';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand bg-info">
                <div className="container">
                    <ul className="nav">
                        <img className='Logo-Navbar text-light' src={logo} alt="" style={{ height: "30px" }} />
                        <li>
                            <Link to="/" className='nav-link text-light'>
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link to="/manajemen-buku" className='nav-link text-light'>
                                Manajemen Buku
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
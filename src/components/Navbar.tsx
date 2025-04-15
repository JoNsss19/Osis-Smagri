import { useSidebar } from '../context/SidebarContext';
import osisLogo from '../assets/osis.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const { setSidebarOpen } = useSidebar();

  return (
    <header className="navbar">
      <Link to="/">
        <img src={osisLogo} className="logo" alt="OSIS" />
      </Link>
      <nav className="nav-link">
        <ul>
          <li><Link to="/" className="hideOnMobile">Home</Link></li>
          <li><Link to="/member" className="hideOnMobile">Member</Link></li>
          <li><Link to="/about" className="hideOnMobile">About</Link></li>
          <li><Link to="/contact" className="hideOnMobile">Contact Us</Link></li>
          <li>
            <a onClick={() => setSidebarOpen(true)} className="open">
              <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e8eaed">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

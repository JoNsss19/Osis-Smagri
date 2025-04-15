import { Link } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';

  
  const Sidebar = () => {
    const { sidebarOpen, setSidebarOpen } = useSidebar();

    return (
      <ul
        className="sidebar"
        style={{ right: sidebarOpen ? '0' : '-500px', transition: 'right 0.3s ease' }}
      >
        <li><a className="close" onClick={() => setSidebarOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e8eaed">
            <path d="M360-120v-720h80v720h-80Zm160-160v-400l200 200-200 200Z"/>
          </svg>
        </a></li>
        <li><Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link></li>
        <li><Link to="/member" onClick={() => setSidebarOpen(false)}>Member</Link></li>
        <li><Link to="/about" onClick={() => setSidebarOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setSidebarOpen(false)}>Contact Us</Link></li>
      </ul>
    );
  };
  
  export default Sidebar;
  
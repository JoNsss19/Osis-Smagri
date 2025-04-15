import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { SidebarProvider } from './context/SidebarContext';
import StickyNavbar from './components/StickyNavbar';
import Sidebar from './components/Sidebar';
import OFooter from './components/Ofooter';
import About from './pages/About';
import Member from './pages/Member';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './styles.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router basename='Osis-Smagri'>
      <SidebarProvider>
        <StickyNavbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/member" element={<Member />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <OFooter />
      </SidebarProvider>
    </Router>
  </StrictMode>
);

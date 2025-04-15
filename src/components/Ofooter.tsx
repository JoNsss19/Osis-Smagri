import { Link } from "react-router-dom";
import osisLogo from "../assets/osis.png";

const OFooter = () => {
    
    return (
      <section className="Ofooter">
        <footer className="footer">
        <div className="footer-left">
          <img src={osisLogo} alt="logo" />
          <p>Official Website OSIS SMA PGRI TEMANGGUNG</p>
          <div className="sosial">
            <a target="_blank" href="https://www.instagram.com/osis.smagri?igsh=cjk0a3c4eDJyb3Zz">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
        <ul className="footer-right">
          <li className="aboutbox">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </li>
          <li>
            <h2>Link</h2>
            <ul className="box">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/member">Member</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </li>
        </ul>
        <div className="footer-bottom">
          <h4>Copyright © 2024 OSIS SMA PGRI TEMANGGUNG</h4>
        </div>
      </footer>
      </section>
        
    );
}

export default OFooter;
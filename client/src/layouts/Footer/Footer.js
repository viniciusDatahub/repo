import logo from "../../img/repologo.png";
import "./Style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="div-footer-nav">
        <Link className="div-footer-link" to="/nos">Quem Somos</Link>
        <Link className="div-footer-link" to="/">FAQ</Link>
        <Link className="div-footer-link" to="/login">Login</Link>
      </div>
      <div className="div-footer-logo">
        <img className="footer-logo" src={logo} alt="" />
        <span className="footer-logo-texto">Copyright 2022 © Repo </span>
      </div>
    </footer>
  );
}

export default Footer;

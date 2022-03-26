import "./Style.css";
import logo from "../../img/repo.png"

function NavbarPublic() {
  return (
    <nav className="navbar-public">
      <a href="/"><img className="logo" src={logo} alt=""/></a>
    </nav>
  );
}

export default NavbarPublic;

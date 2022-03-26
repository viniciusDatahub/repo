import "./Style.css";
import {Link} from "react-router-dom"
import React, {useContext} from "react"

import { AuthContext } from "../../contexts/auth";

function NavbarAdmin() {

  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
  }

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <Link className="navbar-list-link" to="/admin">Perfis</Link>
        <Link className="navbar-list-link" to="/admin/create">Cadastrar Perfil</Link>
        <Link className="navbar-list-link" to="/admin/update">Editar Perfil</Link>
        <Link className="navbar-list-link" to="/admin/repo">Editar Repo</Link>
        <Link className="navbar-list-link" to="/" onClick={handleLogout}>Sair</Link>
      </ul>
    </nav>
  );
}

export default NavbarAdmin;

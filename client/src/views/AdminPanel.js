import "./Style.css";
import NavbarAdmin from "../layouts/NavbarAdmin/NavbarAdmin";
import Profiles from "../components/Profiles/Profiles";

function AdminPanel() {
  return (
    <div className="AdminPanel">
      <NavbarAdmin />
      <Profiles />
    </div>
  );
}

export default AdminPanel;

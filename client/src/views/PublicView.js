import "./Style.css";
import NavbarPublic from "../layouts/NavbarPublic/NavbarPublic";
import Footer from "../layouts/Footer/Footer";
import SearchPage from "../components/SearchPage/SearchPage";

function PublicView() {
  return (
    <div className="AdminPanel">
      <NavbarPublic />
      <SearchPage />
      <Footer />
    </div>
  );
}

export default PublicView;

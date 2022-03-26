import { useState } from "react";
import "./Style.css";
import Axios from "axios";
import NavbarAdmin from "../../layouts/NavbarAdmin/NavbarAdmin";

function AddProfileForm() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const [instagram_url, setInstagramURL] = useState("");
  const [instagram, setInstagramName] = useState("");

  const [profileList, setProfileList] = useState([]);

  const addProfile = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      url: url,
      contact: contact,
      description: description,
      instagram_url: instagram_url,
      instagram: instagram,
    }).then(() => {
      setProfileList([
        ...profileList,
        {
          name: name,
          url: url,
          contact: contact,
          description: description,
          instagram_url: instagram_url,
          instagram: instagram
        },
      ]);
    });
  };

  return (
    <section className="add-profile-container">
      <NavbarAdmin />
      <form className="form">
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <textarea
          id="description"
          type="text"
          placeholder="Descrição"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="URL"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Contato"
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Instagram URL"
          onChange={(e) => {
            setInstagramURL(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Instagram Name"
          onChange={(e) => {
            setInstagramName(e.target.value);
          }}
        />
        <button onClick={addProfile}>Adicionar Perfil</button>
      </form>
    </section>
  );
}

export default AddProfileForm;

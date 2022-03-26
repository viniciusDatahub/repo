import Axios from "axios";
import { useState } from "react";

function Profiles() {
  const [profileList, setProfileList] = useState([]);

  const getProfiles = () => {
    Axios.get("http://localhost:3001/profiles").then((response) => {
      setProfileList(response.data);
    });
  };

  return (
    <div className="profiles-container">
      <button onClick={getProfiles}>Listar perfis</button>
      {profileList.map((val, key) => {
        return (
          <div className="profile">
            <div>
              <p>Id: {val.id}</p>
              <p>Nome: {val.name}</p>
              <p>Descrição: {val.description}</p>
              <p>Instagram: {val.instagram}</p>
              <p>Instagram URL: {val.instagram_url}</p>
              <p>URL: {val.url}</p>
              <p>Contato: {val.contact}</p>
              <p>Foto: {val.haspic}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Profiles;

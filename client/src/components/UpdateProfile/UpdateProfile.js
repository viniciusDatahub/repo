import Axios from "axios";
import { useState, useEffect } from "react";
import Select from "react-select";
import NavbarAdmin from "../../layouts/NavbarAdmin/NavbarAdmin";

function UpdateProfile() {
  const [newUrl, setNewUrl] = useState("");
  const [newName, setNewName] = useState("");
  const [newContact, setNewContact] = useState("");
  const [profileList, setProfileList] = useState([]);
  const [id, setId] = useState("");
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    getProfiles();
  }, []);

  const getProfiles = () => {
    Axios.get("http://localhost:3001/profileslist")
      .then((response) => {
        const profiles = response.data;
        setProfileList(profiles);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const getProfile = (id) => {
    Axios.get(`http://localhost:3001/profile/${id}`).then((response) => {
      setProfile(response.data);
      console.log(profile);
    });
  };
  const handleChange = (e) => {
    setId(e.value);
  };

  const updateProfileUrl = (id) => {
    Axios.put("http://localhost:3001/update", {
      url: newUrl,
      id: id,
      name: newName,
      contact: newContact,
    }).then((response) => {
      setProfileList(
        profileList.map((val) => {
          return val.id === id
            ? {
                id: val.id,
                name: newName,
                url: newUrl,
                contact: newContact,
              }
            : val;
        })
      );
    });
  };

  const deleteProfile = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setProfileList(
        profileList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <section>
      <NavbarAdmin />
      <div className="">
        <div className="div-searchbar">
          <Select
            className="search-select"
            classNamePrefix="select"
            isSearchable={true}
            name="profile"
            options={profileList}
            placeholder="Nome..."
            onChange={handleChange}
          />
          <button onClick={() => getProfile(id)}>Buscar</button>
        </div>
        {profile.map((val, key) => {
          return (
            <div className="container-perfil">
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
              <div className="div-perfil-update">
                <input
                  type="text"
                  placeholder="novo nome"
                  onChange={(event) => {
                    setNewName(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="nova URL"
                  onChange={(event) => {
                    setNewUrl(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="novo contato"
                  onChange={(event) => {
                    setNewContact(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateProfileUrl(val.id);
                  }}
                >
                  Atualizar
                </button>
                <button
                  id="button-remove"
                  onClick={() => {
                    deleteProfile(val.id);
                  }}
                >
                  Remover
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default UpdateProfile;

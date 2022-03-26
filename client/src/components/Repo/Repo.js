import { useState, useEffect } from "react";
import "./Style.css";
import Axios from "axios";
import Select from "react-select";
import AddBookForm from "../FormAddBook/AddBookForm";
import BookCard from "../BookCard/BookCard";
import NavbarAdmin from "../../layouts/NavbarAdmin/NavbarAdmin";

function Repo() {
  const [repoList, setRepoList] = useState([]);
  const [id, setId] = useState("");
  const [profileList, setProfileList] = useState([]);

  useEffect(() => {
    getProfiles();
  }, []);

  const getProfiles = () => {
    Axios.get("http://localhost:3001/profileslist")
      .then((response) => {
        const profiles = response.data;
        console.log("profiles: " + profiles);
        setProfileList(profiles);
        console.log("profileList: " + profileList);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const handleChange = (e) => {
    setId(e.value);
  };

  const getRepo = (id) => {
    Axios.get(`http://localhost:3001/repo/${id}`).then((response) => {
      setRepoList(response.data);
    });
  };

  const removeBook = (idrepo) => {
    Axios.get(`http://localhost:3001/repo/delete/${idrepo}`).then((response) => {
    });
    alert('Livro removido. Recarregue a página para atualizar o Repo.')
  };

  return (
    <div className="repo-container">
      <NavbarAdmin />
      <div className="div-searchbar">
        <Select
          className="search-select"
          classNamePrefix="select"
          isClearable={true}
          isSearchable={true}
          name="profile"
          options={profileList}
          placeholder="Nome..."
          onChange={handleChange}
        />
        <button className="button-buscar" onClick={() => getRepo(id)}>Buscar</button>
      </div>
      {repoList.map((val, key) => {
        var idrepo = val.idrepo
        return (
          <div className="repo">
            <BookCard
              title={val.title}
              author={val.author}
              imgName={require(`../../img/${val.img_name}.jpg`)}
              editora={val.editora}
              pages={val.pgs}
              url={val.url}
            />
            <button id="button-remove" onClick={() => removeBook(idrepo)}>Remover livro</button>
          </div>
        );
      })}
      <AddBookForm idProfile={id} />
    </div>
  );
}

export default Repo;

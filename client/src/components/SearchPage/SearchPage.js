import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Style.css";
import Select from "react-select";
import BookCard from "../BookCard/BookCard";
import ProfileCard from "../ProfileCard/ProfileCard";

function SearchPage() {
  const [repoList, setRepoList] = useState([]);
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

  const handleChange = (e) => {
    setId(e.value);
  };

  const getRepo = (id) => {
    Axios.get(`http://localhost:3001/repo/${id}`).then((response) => {
      setRepoList(response.data);
    });
    getProfile(id);
  };

  const getProfile = (id) => {
    Axios.get(`http://localhost:3001/profile/${id}`).then((response) => {
      setProfile(response.data);
    });
  };

  return (
    <div className="search-container">
      <div className="div-h1">
        <h1>Indicações de leituras de quem você mais admira.</h1>
      </div>
      <div className="div-card-profile">
        {profile.map((val, key) => {
          var imgProfile = val.id;
          if (!val.haspic) {
            imgProfile = "user";
          }
          return (
            <ProfileCard
              name={val.name}
              instagram={val.instagram}
              instagram_url={val.instagram_url}
              imgProfile={require(`../../img/${imgProfile}.jpg`)}
              description={val.description}
            />
          );
        })}
      </div>
      <div className="repo-container">
        {repoList.map((val, key) => {
          return (
            <BookCard
              title={val.title}
              author={val.author}
              imgName={require(`../../img/${val.img_name}.jpg`)}
              editora={val.editora}
              pages={val.pgs}
              url={val.url}
            />
          );
        })}
      </div>
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
        <button onClick={() => getRepo(id)}>Buscar</button>
      </div>
    </div>
  );
}

export default SearchPage;

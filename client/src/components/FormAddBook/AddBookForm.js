import { useState } from "react";
import "./Style.css";
import Axios from "axios";

function AddBookForm(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [editora, setEditora] = useState("");
  const [pages, setPages] = useState("");
  const [url, setUrl] = useState("");
  const [imgName, setImageName] = useState("");
  const idProfile = props.idProfile;

  const addBook = () => {
    Axios.post("http://localhost:3001/book/create", {
      id: idProfile,
      title: title,
      author: author,
      editora: editora,
      pages: pages,
      url: url,
      imgName: imgName
    }).then(() => {
      console.log("Book added!");
    });
  };

  return (
    <form className="form">
      <input
        type="text"
        placeholder="Título"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Autor(a)"
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Editora"
        onChange={(e) => {
          setEditora(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Nr. Páginas"
        onChange={(e) => {
          setPages(e.target.value);
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
        placeholder="Image name"
        onChange={(e) => {
          setImageName(e.target.value);
        }}
      />
      <button className="button-buscar" onClick={addBook}>Adicionar Livro</button>
    </form>
  );
}

export default AddBookForm;

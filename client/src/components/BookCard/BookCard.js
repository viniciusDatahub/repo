import React from "react";
import "./Style.css";

function BookCard({ title, author, editora, url, pages, imgName }) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={url}>
      <div className="book-card">
        <div>
          <p className="booktitle">{title}</p>
          <p>por {author}</p>
          <p>Editora: {editora}</p>
          <p>Páginas: {pages}</p>
        </div>
        <div className="div-img-book">
          <img className="imgBook" src={imgName} alt="" />
        </div>
      </div>
    </a>
  );
}

export default BookCard;

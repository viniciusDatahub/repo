const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "repodb",
});

// PROFILES

app.post("/create", (req, res) => {
  const name = req.body.name;
  const url = req.body.url;
  const contact = req.body.contact;
  const description = req.body.description;
  const haspic = 0;
  const instagram_url = req.body.instagram_url;
  const instagram = req.body.instagram;

  db.query(
    "INSERT INTO profiles (name, url, contact, description, haspic, instagram_url, instagram) VALUES (?,?,?,?,?,?,?)",
    [name, url, contact, description, haspic, instagram_url, instagram],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

app.get("/profiles", (req, res) => {
  db.query("SELECT * FROM profiles", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/profileslist", (req, res) => {
  db.query("SELECT id as value, name as label FROM profiles", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/profile/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM profiles WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const url = req.body.url;
  const contact = req.body.contact;

  db.query(
    "UPDATE profiles SET name = ?, url = ?, contact = ? WHERE id = ?",
    [name, url, contact, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM profiles WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// BOOKS

app.post("/book/create", (req, res) => {
  const idprofile = req.body.id;
  const title = req.body.title;
  const author = req.body.author;
  const editora = req.body.editora;
  const pages = req.body.pages;
  const url = req.body.url;
  const img_name = req.body.imgName;

  db.query(
    "INSERT INTO repo (idprofile, title, author, editora, pgs, url, img_name) VALUES (?,?,?,?,?,?,?)",
    [idprofile, title, author, editora, pages, url, img_name],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Book inserted");
      }
    }
  );
});

// REPO

app.get("/repo/:id", (req, res) => {
  const id = req.params.id;

  db.query("SELECT * FROM repo WHERE idprofile = ? ", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/repo/delete/:idrepo", (req, res) => {
  const idrepo = req.params.idrepo;

  db.query("DELETE FROM repo WHERE idrepo = ? ", idrepo, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// LOGIN


app.post('/sessions', {email, password})

app.listen(3001, () => {
  console.log("server tá up na porta 3001");
});

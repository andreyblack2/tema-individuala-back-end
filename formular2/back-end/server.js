const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const port = 5050;
app.listen(port, () => {
  console.log("Server online on: " + port);
});
app.use("/", express.static("../front-end"));
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "siscit_back_end",
});
connection.connect(function (err) {
  console.log("Connected to database!");
  const sql =
    "CREATE TABLE IF NOT EXISTS abonamente_metrou(nume VARCHAR(255), prenume  VARCHAR(255), email  VARCHAR(255) , telefon  VARCHAR(255),data_inceput  VARCHAR(10),data_sfarsit  VARCHAR(10))"; //intre paranteze campurile cu datele
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
});
app.post("/bilet", (req, res) => {
  let bilet = {
    nume: req.body.nume,
    prenume: req.body.prenume,
    telefon: req.body.telefon,
    cnp: req.body.cnp,
    email: req.body.email,
    data_inceput: req.body.data_inceput,
    data_sfarsit: req.body.data_sfarsit,
    varsta: req.body.varsta,
  };
  let error = [];
  //aici rezolvati cerintele (づ｡◕‿‿◕｡)づ
 

  if (error.length === 0) {

    const sql = `INSERT INTO abonamente_metrou (nume,
      prenume,
      telefon,
      cnp,
      email,
      data_inceput,
      data_sfarsit,
      varsta) VALUES (?,?,?,?,?,?,?,?)`;
    connection.query(
      sql,
      [
        bilet.nume,
        bilet.prenume,
        bilet.telefon,
        bilet.cnp,
        bilet.email,
        bilet.data_inceput,
        bilet.data_sfarsit,
        bilet.varsta,
      ],
      function (err, result) {
        if (err) throw err;
        console.log("Abonament realizat cu succes!");
        res.status(200).send({
          message: "Abonament realizat cu succes",
        });
        console.log(sql);
      }
    );
  } else {
    res.status(500).send(error);
    console.log("Abonamentul nu a putut fi creat!");
  }
  app.use('/', express.static('../front-end'))
});
//modifica si din front la index.html

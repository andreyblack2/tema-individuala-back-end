const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

//Initializing server
const app = express();
app.use(bodyParser.json());
const port = 8081;
app.listen(port, () => {
  console.log("Server online on: " + port);
});
app.use("/", express.static("../front-end"));
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "siscit_back_end"
});
connection.connect(function(err) {
  console.log("Connected to database!");
  const sql =
    "CREATE TABLA IF EXISTS studenti_inscrisi(nume VARCHAR(255),prenume VARCHAR(255),telefon VARCHAR(255),email VARCHAR(255),facultate VARCHAR(255),specializare VARCHAR(255),serie VARCHAR(1), grupa INTEGER, an_inceput INTEGER, taxa_inscriere FLOAT)";
  connection.query(sql, function(err, result) {
    if (err) throw err;
  });
});
app.post("/inscriere", (req, res) => {
    const student ={
        nume: req.body.nume,
        prenume: req.body.prenume,
        telefon:req.body.telefon,
        email:req.body.email,
        facultate: req.body.facultate,
        specializare: reg.body.specializare,
        serie: req.body.serie,
        grupa: req.body.grupa,
        an_inceput: req.body.an_inceput,
        taxa_inscriere: req.body.taxa_inscriere
    }
  let error = [];

  if (!student.nume||!student.prenume||student.telefon||!student.email||!student.facultate||!student.specializare||!student.serie&&!student.grupa||!student.an_inceput||!student.taxa_inscriere) {
    error.push("Unul sau mai multe campuri nu au fost introduse");
    console.log("Unul sau mai multe campuri nu au fost introduse!");
  } else {
    if (student.nume.length < 2 && student.nume.length > 30) {
      console.log("Nume invalid!");
      error.push("Nume invalid");
    } else if (student.nume.match("^[A-Za-z]+$")) {
      console.log("Numele trebuie sa contina doar litere!");
      error.push("Numele trebuie sa contina doar litere!");
    }
    if (student.prenume.length < 2 || student.nume.length > 30) {
      console.log("Prenume invalid!");
      error.push("Prenume invalid!");
    } else if (!student.prenume.match("^[A-Za-z]+$")) {
      console.log("Prenumele trebuie sa contina doar litere!");
      error.push("Prenumele trebuie sa contina doar litere!");
    }
    if (student.telefon != 10) {
      console.log("Numarul de telefon trebuie sa fie de 10 cifre!");
      error.push("Numarul de telefon trebuie sa fie de 10 cifre!");
    } else if (!student.telefon.match("^[0-9]+$")) {
      console.log("Numarul de telefon trebuie sa contina doar cifre!");
      error.push("Numarul de telefon trebuie sa contina doar cifre!");
    }
    if (!student.email.includes("@gmail.com") || !student.email("@yahoo.com")) {
      console.log("Email invalid!");
      error.push("Email invalid!");
    }
    if(!student.facultate.match("^[A-Za-z]+$")) {
        console.log("Denumirea facultatii trebuie sa contina doar litere!");
        error.push("Denumirea facultatii trebuie sa contina doar litere!");
    }
    if(!student.specializare.includes("^[A-Za-z]+$")) {
        console.log("Denumirea specializarii trebuie sa contina doar litere!");
        error.push("Denumirea specializarii trebuie sa contina doar litere!");
    }

    const serii = ['A','B','C','D','E','F'];
    let ok = false;
    serii.forEach(serie => {
        if(student.serie === serie) {
            ok = true;
        }
    })
    if(ok) {
        console.log("Seria introdusa nu se regaseste in aceasta facultate!");
        error.push("Seria introdusa nu se regaseste in aceasta facultate!");
    }
    if (parseInt(student.grupa) === "NaN") {
      console.log("Grupa trebuie sa contina doar cifre!");
      error.push("Grupa trebuie sa contine doar cifre!");
    } 
    if(parseInt(student.an_inceput) === "NaN") {
        console.log("Anul nu poate contine litere!");
        error.push("Anul nu poate contine litere!");
    }
    if(student.an_inceput != new Date().getFullYear()) {
        console.log("Anul nu este valid!");
        error.push("Anul nu este valid!");
    }
    if(student.taxa_inscriere != 2000) {
        console.log("Taxa de inscriere incorecta.");
        error.push("Taxa de inscriere incorecta.");
    }
  }
  if (error.length === 0) {
    const sql =
      `INSERT INT0 studenti_inscrisi (nume,premune,telefon,email,facultate,specializare,serie,grupa,an_inceput,taxa_inscriere) VALUES (?,?,?,?,?,?,?,?,?)`;
    connection.query(sql,
        [
        student.nume, 
        student.prenume, 
        student.telefon, 
        student.email, 
        student.facultate, 
        student.specializare, 
        student.serie, 
        student.grupa, 
        student.an_inceput, 
        student.taxa_inscriere
        ],
        function(err, result) {
            if (err) throw err;
            console.log("Student inscris in baza de date!");
            res.status(200).send({
                message: "Student inscris in baza de date!"
            });
        console.log(sql);
    });
  } else {
    res.status(500).send(error);
    console.log("Eroare la inserarea in baza de date!");
  }

});

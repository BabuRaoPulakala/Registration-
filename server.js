// @ts-nocheck
const express = require("express");
const mysql = require("mysql");
const bodyparser = require("body-parser");
const path = require("path");

const initial_path = path.join(__dirname, "public");
const register_path = path.join(__dirname, "register");

const app = express();
const port = 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(initial_path));
app.use(express.static(register_path));

app.get("/", function (req, res) {
  res.sendFile("index.html", initial_path);
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Baburao@2000",
  database: "user_registration",
});

db.connect(function (err) {
  if (err) {
    throw err;
  }
  console.log("MySQL connected sucessfully.....");
});
// // add data to database

app.post("/register", function (req, res) {
  const { username, email, password } = req.body;
  //   console.log(username, email, password);
  if (username && email && password) {
    const sql = "INSERT INTO users (username,email,password) VALUES (?,?,?)";
    db.query(sql, [username, email, password], function (err, result) {
      if (err) {
        return res.status(500).send("Server error");
      }
      //   res.send("Registration sucessfull");
      //   res.sendFile("index.html", register_path);
      res.redirect("/register");
    });
  } else {
    res.status(400).send.send("Please fill in all fields");
  }
});

// retreive data from database

// app.get("/register", function (req, res) {
//   const sql = "select * from users";
//   db.query(sql, function (err, results) {
//     if (err) {
//       return res.status(500).send("server error");
//     }
//     console.log(results);
//     // res.json(results);
//   });
// });

app.get("/", function (req, res) {
  res.send(`
    <h1>
      hey...toady i am excited to know how to make user registration form that
      has connected with data base mongoDB
    </h1>`);
});
app.listen(port, function () {
  console.log(`server running on port ${port}`);
});

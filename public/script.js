// @ts-nocheck
// @ts-
// const express = require("./server");
// const mysql = require("./server");

// const app = express();

// document
//   .getElementById("registrationForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the form from submitting the traditional way

//     var username = document.getElementById("username").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var message = document.getElementById("message");

//     if (username && email && password) {
//       message.style.color = "green";
//       message.textContent = "Registration successful!";
//       // Here you can add code to submit the form data to the server
//       app.post("/register", function (req, res) {
//         const { username, email, password } = req.body;
//         //   console.log(username, email, password);
//         if (username && email && password) {
//           const sql =
//             "INSERT INTO users (username,email,password) VALUES (?,?,?)";
//           db.query(sql, [username, email, password], function (err, result) {
//             if (err) {
//               return res.status(500).send("Server error");
//             }
//             //   res.send("Registration sucessfull");
//             //   res.sendFile("index.html", register_path);
//             res.redirect("/register");
//           });
//         } else {
//           res.status(400).send.send("Please fill in all fields");
//         }
//       });
//     } else {
//       message.style.color = "red";
//       message.textContent = "Please fill in all fields.";
//     }
//   });

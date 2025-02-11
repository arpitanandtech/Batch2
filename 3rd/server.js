const express = require('express');

const bodyParser = require('body-parser');

const cors = require("cors");

const router = require("./routes/index.routes");

// const { connectMyDb } = require('./db/connect');

const app = express();

const fs = require('fs');

const mongoose = require('mongoose');

// connectMyDb(); // Call the function

app.use(cors());  // Middleware 

app.use(bodyParser.json()); // Middleware, GRABS ALL THE REQUESTS

app.use(function (req, res, next) {
  console.log(`${new Date()}, ${req.url}, ${req.method} ${req.headers.host}`);
  next();
})

app.use(function (req, res, next) {
  console.log(`Loggger 2${new Date()}, ${req.url}, ${req.method} ${req.headers.host}`);
  next();
})

app.use("/api/v1", router);

app.get("/my-api", function (req, res, next) {
  fs.readFile("./data/data.txt", function (err, data) {
    if (err) {
      console.log(err);
    }
    res.json({ data: data.toString() })
  });
})

app.get("/my-api-2", function (req, res, next) {
  fs.writeFile("./data/data2.txt", "Batch 2 MERN STACK webfiuewgbggiuhewiu", function (err, data) {
    if (err) {
      console.log(err);
    }
    res.json({ message: "File created sucessfully!" });
  });
})

app.get("/my-api-3", function (req, res, next) {
  fs.unlink("./data/data2.txt", function (err, data) {
    res.json({ message: "File deleted sucessfully!" });
  })
})

app.get("/my-api-4", function (req, res, next) {
  const csvData = `
    id,name,rollno,subject\n
    1, Arpit, 1, cse\n
    2, Abhi 2, cse\n
  `;
  fs.writeFile("./data/data.csv", csvData, function (err, data) {
    if (err) {
      console.log(err);
    }
    res.json({ message: "File created sucessfully!" });
  });
});



app.listen(8090, function () {
  mongoose.connect("mongodb+srv://arpit:arpit123@cluster0.oxfe5.mongodb.net/Tasks?retryWrites=true&w=majority").then(_response => {
    console.log("Database conneted and my app is working at PORT-", 8090);
  })
});
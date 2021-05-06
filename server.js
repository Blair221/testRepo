const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;

const db = mongoose.connect("mongodb://localhost/tempsAPI");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Temp = require("./models/tempModel");

const router = express.Router();

router.route("/temps").get((req, res) => {
  const query = {};
  if (req.query._id) {
    query._id = req.query._id;
  }
  Temp.find(query, (err, temps) => {
    if (err) {
      return res.send(err);
    }
    return res.json(temps);
  });
});

router.route("/temps/:id").get((req, res) => {
  
  Temp.findById(req.params.id, (err, temp) => {
    if (err) {
      return res.send(err);
    }
    return res.json(temp);
  });
});

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("what's up fam");
});

app.get("/api", (req, res) => {
  res.sendFile(path.join(__dirname, "./testApi/tempTest.js"));
});

app.listen(port, () => {
  console.log(`listening on port:${port}`);
});

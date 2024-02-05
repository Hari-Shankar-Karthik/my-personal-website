const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static("public"));

const portNum = 8080;
app.listen(portNum, () => {
    console.log(`Listening on port ${portNum}.`);
})

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/hobbies", (req, res) => {
    res.render("hobbies");
})

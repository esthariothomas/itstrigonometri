//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const moongose = require('mongoose');
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

moongose.connect("mongodb://localhost:27017/ITStrigonometry", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const usersSchema = {
    name: String,
    password: String,
    dateofbirth: Date,
    schoolname: String
}

const User = moongose.model("User", usersSchema);







app.get('/', (req, res) => {
    res.sendFile(__dirname + "/home.html");
})

app.get('/chapter1', (req, res) => {
    res.sendFile(__dirname + '/chapter1.html');
})

app.listen(port, () => {
    console.log("Server is running on port 3000");
})
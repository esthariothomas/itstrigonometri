//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/ITStrigonometry", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const usersSchema = {
    name: String,
    password: String,
    dateofbirth: Date,
    schoolname: String
}

const User = mongoose.model("User", usersSchema);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/home.html");
})

app.get('/chapter1', (req, res) => {
    res.sendFile(__dirname + '/chapter1.html');
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html');
})

app.post('register', (req, res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password,
        dateofbirth: req.body.date,
        schoolname: req.body.schoolName
    })
    user.save((err) => {
        if(!err) {
            res.redirect('/');
        }
    });
});

app.listen(port, () => {
    console.log("Server is running on port 3000");
})
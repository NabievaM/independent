const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const expressEdge = require("express-edge");
const mongoose = require("mongoose");
const Controller = require("./controller/index");
const ControllerAbout = require("./controller/about");
const ControllerAdditive = require("./controller/additive");
const ControllerStore = require("./controller/store");
const ControllerCreate = require("./controller/create");
const ControllerComment = require("./controller/comment");

const Post = require("./models/post");
const Comment = require("./models/comment");
mongoose.connect("mongodb+srv://portfolio:S7s9ZbzISRh9aNG9@cluster0.920jw.mongodb.net/portfolio");
app.listen(PORT, () => {
    console.log("ishlayapti");
});
app.use(expressEdge.engine);
app.set("views", `${__dirname}/views`);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/", Controller);
app.use("/about", ControllerAbout);
app.use("/additive", ControllerAdditive);
app.use("/store", ControllerStore);
app.use("/create", ControllerCreate);
app.use("/comment", ControllerComment);

app.post("/posts/new", (req, res) => {
    console.log(req.body);
    Post.create(req.body, (err, post) => {
        res.redirect("/store");
    });
});
app.post("/comment/enter", (req, res) => {
    console.log(req.body);
    Comment.create(req.body, (err, post) => {
        res.redirect("/comment");
    })
});
app.use((req, res) => res.render("404page"));
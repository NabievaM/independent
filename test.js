const mongoose = require("mongoose");
const Post = require("./models/post");
mongoose.connect("mongodb+srv://portfolio:S7s9ZbzISRh9aNG9@cluster0.920jw.mongodb.net/portfolio");
Post.create({
    title: "the beautiful dresses in the our store",
    username: "nabievaa",
    img: "../public/assets/img/about.jpg",
    descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    createdAt: "2022-05-08"
}, (err, post) => {
    console.log(err, post)
});
module.exports = Post;
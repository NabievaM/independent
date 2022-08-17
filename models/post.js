const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: String,
    username: String,
    img: String,
    descr: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});
const Post = mongoose.model("post", PostSchema);
module.exports = Post;
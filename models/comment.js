const mongoose = require("mongoose");

const Comment = new mongoose.Schema({
    title: String,
    user: String
});
const Comments = mongoose.model("comment", Comment);
module.exports = Comments;
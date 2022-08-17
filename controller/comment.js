const Router = require("express");
const router = Router();
const Comment = require("../models/comment");
router.get("/", async(req, res) => {
    const comments = await Comment.find();
    res.render("comment", { comments });
});
module.exports = router;
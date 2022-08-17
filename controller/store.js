const Router = require("express");
const router = Router();
const Post = require("../models/post");
router.get("/", async(req, res) => {
    const posts = await Post.find();
    res.render("store", { posts });
});
router.get("/:id/edit", async(req, res) => {
    if (!req.query.allow) {
        return res.redirect("/");
    }
    const post = await Post.findById(req.params.id);
    res.render("anything-edit", {
        title: `Edit ${post.title}`,
        post
    });
});

router.post("/edit", async(req, res) => {
    await Post.findByIdAndUpdate(req.body.id, req.body);
    res.redirect("/store");
});
router.post("/remove", async(req, res) => {
    try {
        await Post.deleteOne({ _id: req.body.mukhlis });
        res.redirect("/store");
    } catch (e) {
        console.log(e);
    }
})
module.exports = router;
var express = require('express');
const Post = require("./model/Post");
const router = express.Router();


router.get("/posts", async (req, res) => {
    const posts = await Post.find();
    res.send(posts);
})

router.post("/posts", async (req, res) => {
    const post = new Post({
      "title": req.body.title,
      "content": req.body.content
    })
    await post.save();
    res.send(post)
})

router.get("/posts/:id", async (req, res) => {
  try {
       const post = await Post.find({_id: req.params.id});
      res.send(post)
  } catch (e) {
        res.status(400).send({error: "Can't find the post"});
  }
})

router.patch("/posts/:id/:abc", async (req, res) => {
   try {
       const post = await Post.findOne({_id: req.params.id});
       if (req.body.title) {
            post.title = req.body.title;
       }
       if (req.body.content) {
            post.content = req.body.content;
       }

      await post.save()
      res.send(post);
   } catch (e) {
         res.status(400).send({error: "Can't update the post"});
   }
 })

 router.delete("/posts/:id", async (req, res) => {
   try {
        await Post.deleteOne({_id: req.params.id});
         res.send(200).send({"success" : "Successfully deleted"});
   } catch (e) {
         res.status(400).send({error: "Can't delete"});
   }
 })

module.exports = router;
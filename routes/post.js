const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

// hhtp://localhost:5000/api/post (GET)
router.get('/', async (req, res) => {
    const posts = await Post.find({})
    res.status(200).json(posts)
})

// hhtp://localhost:5000/api/post (POST)
router.post('/', async (req, res) => {

    const postData = {
        title: req.body.title,
        text: req.body.text
    }
    const post = new Post(postData)

    await post.save()
    res.status(201).json(post)
})
// hhtp://localhost:5000/api/post/23  динамичен (DELETE)
router.delete('/:postId', async (req, res) => {
    await Post.remove({_id: req.params.id});
    res.status(200).json({
        message: 'Удалено'
    })
})

module.exports = router

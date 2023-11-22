const { Post } = require('../models/models')

// Отримати всі пости
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll()
        res.json(posts)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

// Отримати пост за ID
const getPostById = async (req, res) => {
    const postId = req.params.id

    try {
        const post = await Post.findByPk(postId)
        if (!post) {
            return res.status(404).json({ error: 'Post not found' })
        }
        res.json(post)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

// Додати новий пост
const addPost = async (req, res) => {
    const { date, title, img, text } = req.body

    try {
        const newPost = await Post.create({ date, title, img, text })
        res.status(201).json(newPost)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

// Видалити пост за ID
const deletePostById = async (req, res) => {
    const postId = req.params.id

    try {
        const deletedPost = await Post.destroy({
            where: {
                id: postId,
            },
        })

        if (!deletedPost) {
            return res.status(404).json({ error: 'Post not found' })
        }

        res.json({ message: 'Post deleted successfully' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

module.exports = {
    getAllPosts,
    getPostById,
    addPost,
    deletePostById,
}

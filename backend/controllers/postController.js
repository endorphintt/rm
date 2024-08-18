const { Post } = require('../models/models')
const { v4: uuidv4 } = require('uuid')
const path = require('path')

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll()
        res.json(posts)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

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

const addPost = async (req, res) => {
    try {
        const { date, title, text } = req.body
        const image = req.files.img

        const imageName = uuidv4() + path.extname(image.name)
        image.mv(path.resolve(__dirname, '..', 'static', imageName))

        const newPost = await Post.create({
            date,
            title,
            img: imageName,
            text,
        })

        res.status(201).json(newPost)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

const deletePostById = async (req, res) => {
    const postId = req.params.id

    try {
        const post = await Post.findByPk(postId)

        if (!post) {
            return res.status(404).json({ error: 'Post not found' })
        }

        // Отримуємо ім'я файлу фото для видалення
        const imageName = post.img

        // Видаляємо пост з бази даних
        await post.destroy()

        // Видаляємо файл фото з сервера
        if (imageName) {
            const fs = require('fs')
            const path = require('path')

            const staticFolderPath = path.join(__dirname, 'static')
            const imagePath = path.join(staticFolderPath, imageName.trim())

            // Перевіряємо, чи файл існує перед видаленням
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath)
            }
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

import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import c from './Post.module.scss'
import { useMyContext } from '../../../context/Context'
import PagesTop from '../../pagesTop/PagesTop'
import Reviews from '../../reviews/Reviews'
import Contact from '../../contact/Contact'
import Footer from '../../footer/Footer'

interface Item {
    title: string
    date: string
    img: string
    text: string
    id: number
}

const Post = () => {
    const { data } = useMyContext()
    const [postData, setPostData] = useState<Item | null>(null)
    const params = useParams()
    async function getPostById(id: string) {
        try {
            const response = await axios.get(
                `http://localhost:5435/api/posts/${id}`
            )
            setPostData(response.data)
        } catch (error: any) {
            console.error('Error fetching data:', error.message)
        }
    }
    useEffect(() => {
        if (params.id) {
            getPostById(params.id)
        }
    }, [params.id])

    return (
        <div>
            {postData ? (
                <div className={c.page}>
                    <PagesTop title="Post" />
                    <div className={c.body}>
                        <img
                            src={
                                process.env.REACT_APP_API_URL +
                                '/' +
                                postData.img
                            }
                            alt={postData.title + '(photo)'}
                            className={c.body__img}
                        />
                        <div className={c.body__info}>
                            <h2 className={c.body__title}>{postData.title}</h2>
                            <p className={c.body__text}>{postData.text}</p>
                        </div>
                    </div>
                    <p className={c.data}>{postData.date}</p>
                    <Reviews />
                    <Contact />
                    <Footer />
                </div>
            ) : (
                <span></span>
            )}
        </div>
    )
}

export default Post

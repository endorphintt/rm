import { useEffect, useState } from 'react'
import { useMyContext } from '../../context/Context'
import { BLOG_ROUTE, HOME_ROUTE } from '../../variables/variables'
import PagesTop from '../pagesTop/PagesTop'
import c from './Blog.module.scss'
import axios from 'axios'
import Reviews from '../reviews/Reviews'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import { useNavigate } from 'react-router-dom'

interface Item {
    title: string
    data: string
    img: string
    text: string
    id: number
}

const Blog = () => {
    const { data } = useMyContext()
    const [blogData, setBlogData] = useState<Item[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)
    const nav = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url: string =
                    process.env.REACT_APP_API_URL + 'api/posts' || ''
                const response = await axios.get(url)
                const responseData = response.data
                setBlogData(responseData)
                setLoading(false)
            } catch (error: any) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    return (
        <div className={c.blog}>
            <PagesTop title="blog" />
            <div className={c.items_container}>
                {loading ? (
                    <span></span>
                ) : blogData ? (
                    <div className={c.items}>
                        {blogData.map((item) => (
                            <div
                                onClick={() =>
                                    nav('/' + BLOG_ROUTE + '/' + item.id)
                                }
                                key={item.img}
                                className={c.item_container}
                            >
                                <div
                                    className={c.item}
                                    style={{
                                        backgroundImage: `url(${
                                            process.env.REACT_APP_API_URL +
                                            '/' +
                                            item.img
                                        })`,
                                    }}
                                ></div>
                                <h3 className={c.item__title}>{item.title}</h3>
                            </div>
                        ))}
                    </div>
                ) : (
                    <span></span>
                )}
            </div>
            <Reviews />
            <Contact />
            <Footer />
        </div>
    )
}

export default Blog

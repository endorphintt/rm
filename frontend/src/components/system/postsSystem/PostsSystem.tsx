import React, { useEffect, useState } from 'react'
import c from '../System.module.scss'
import axios, { AxiosResponse } from 'axios'

interface Post {
    id: number
    date: string
    title: string
    text: string
    img: string
}

interface FormData {
    date: string
    text: string
    title: string
    img: File | null
}

interface Props {
    deleteItem: (url: string, id: number) => Promise<void>
}

const PostsSystem: React.FC<Props> = ({ deleteItem }) => {
    const [road, setRoad] = useState<string>('')
    const roads = ['post', 'delete']
    const [data, setData] = useState<Post[] | null>(null)

    const [formData, setFormData] = useState<FormData>({
        date: '',
        text: '',
        title: '',
        img: null,
    })

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleImageChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        if (e.target.files) {
            setFormData({
                ...formData,
                img: e.target.files[0],
            })
            console.log(formData)
        }
    }

    async function fetchData(): Promise<any> {
        try {
            const response: AxiosResponse = await axios.get(
                process.env.REACT_APP_API_URL + 'api/posts/'
            )
            setData(response.data)
        } catch (error) {
            console.error('Error fetching data:', error)
            throw error
        }
    }

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()

        const apiUrl = process.env.REACT_APP_API_URL + 'api/posts/'

        try {
            if (formData.img) {
                const formDataToSend = new FormData()
                formDataToSend.append('date', formData.date)
                formDataToSend.append('text', formData.text)
                formDataToSend.append('title', formData.title)
                formDataToSend.append('img', formData.img)

                const response = await axios.post(apiUrl, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })

                if (response.status === 201) {
                    alert('Data successfully sent!')
                } else {
                    console.error('Failed to send data:', response.statusText)
                }
            } else {
                alert('choouse the photo')
            }
        } catch (error) {
            console.error('Error during POST request:', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className={c.apartments__container}>
            <nav className={c.header}>
                {roads.map((item) => (
                    <button
                        className={c.header__button}
                        key={item}
                        onClick={() => setRoad(item)}
                        style={{
                            backgroundColor:
                                road === item
                                    ? 'rgba(255, 255, 255, 0.3)'
                                    : 'transparent',
                        }}
                    >
                        {item}
                    </button>
                ))}
            </nav>
            <div className={c.body}>
                {road === 'delete' && data ? (
                    <div className={c.detete__container}>
                        {data.map((item) => (
                            <div className={c.delete__item} key={item.id}>
                                <p className={c.delete__title}>{item.title}</p>
                                <button
                                    onClick={() =>
                                        deleteItem('api/posts/', item.id)
                                    }
                                    className={c.delete__button}
                                >
                                    delete
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <form className={c.system__form} onSubmit={handleSubmit}>
                        <label>
                            Date:
                            <input
                                type="text"
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Text:
                            <textarea
                                name="text"
                                value={formData.text}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Title:
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Image (only one) :
                            <input
                                type="file"
                                name="image"
                                onChange={handleImageChange}
                            />
                        </label>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default PostsSystem

import React, { useEffect, useState } from 'react'
import c from '../System.module.scss'
import axios, { AxiosResponse } from 'axios'

interface Comment {
    id: number
    text: string
    stars: string
    name: string
}

interface Props {
    deleteItem: (url: string, id: number) => Promise<void>
}

const CommentsSystem: React.FC<Props> = ({ deleteItem }) => {
    const [road, setRoad] = useState<string>('')
    const roads = ['post', 'delete']
    const [data, setData] = useState<Comment[] | null>(null)

    const [formData, setFormData] = useState({
        text: '',
        stars: '',
        name: '',
    })
    const handleInputChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()

        const apiUrl = process.env.REACT_APP_API_URL + 'api/reviews/' // Замініть на свій URL

        try {
            const response = await axios.post(apiUrl, formData)

            if (response.status === 201) {
                alert('Data successfully sent')
            } else {
                console.error('Failed to send data:', response.statusText)
            }
        } catch (error) {
            console.error('Error during POST request:', error)
        }
    }

    async function fetchData(): Promise<any> {
        try {
            const response: AxiosResponse = await axios.get(
                process.env.REACT_APP_API_URL + 'api/reviews/'
            )
            setData(response.data)
        } catch (error) {
            // Обробка помилок, наприклад, можна вивести їх або обробити іншим чином
            console.error('Error fetching data:', error)
            throw error
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
                                <p className={c.delete__title}>{item.name}</p>
                                <button
                                    onClick={() =>
                                        deleteItem('api/reviews', item.id)
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
                            name:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            stars (4.5 - okay, 4,5 - bad) :
                            <input
                                type="text"
                                name="stars"
                                value={formData.stars}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            text:
                            <input
                                type="text"
                                name="text"
                                value={formData.text}
                                onChange={handleInputChange}
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

export default CommentsSystem

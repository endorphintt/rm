import { useState } from 'react'
import c from './System.module.scss'
import axios, { AxiosResponse } from 'axios'
import PostsSystem from './postsSystem/PostsSystem'
import ApartmentsSystem from './apartmentsSystem/ApartmentsSystem'
import CommentsSystem from './commentsSystem/CommentsSystem'
import AppointmentsSystem from './appointmentsSystem/AppointmentsSystem'
import TypeSystem from './typeSystem/TypeSystem'
import CitiesSystem from './citiesSystem/CitiesSystem'

const System = () => {
    const [activeItem, setActiveItem] = useState<string>('')
    const items = [
        'comments',
        'apartments',
        'posts',
        'appointments',
        'types',
        'cities',
    ]

    const deleteItem = async (url: string, id: number) => {
        try {
            const response = await axios.delete(
                `${process.env.REACT_APP_API_URL + url}/${id}`
            )

            if (response.status < 300) {
                alert(`Item with ID ${id} deleted successfully.`)
                // Виконайте додаткові дії після успішного видалення
            } else {
                console.error(`Failed to delete item with ID ${id}.`)
                // Обробте помилку видалення
            }
        } catch (error) {
            console.error('Error during DELETE request:', error)
            // Обробте інші помилки
        }
    }

    return (
        <div className={c.container}>
            <nav className={c.header}>
                {items.map((item) => (
                    <button
                        style={{
                            backgroundColor:
                                activeItem === item
                                    ? 'rgba(255, 255, 255, 0.3)'
                                    : 'transparent',
                        }}
                        className={c.header__button}
                        key={item}
                        onClick={() => setActiveItem(item)}
                    >
                        {item}
                    </button>
                ))}
            </nav>
            <div className={c.body}>
                {activeItem === 'comments' ? (
                    <CommentsSystem deleteItem={deleteItem} />
                ) : activeItem === 'apartments' ? (
                    <ApartmentsSystem deleteItem={deleteItem} />
                ) : activeItem === 'posts' ? (
                    <PostsSystem deleteItem={deleteItem} />
                ) : activeItem === 'appointments' ? (
                    <AppointmentsSystem deleteItem={deleteItem} />
                ) : activeItem === 'types' ? (
                    <TypeSystem deleteItem={deleteItem} />
                ) : (
                    <CitiesSystem deleteItem={deleteItem} />
                )}
            </div>
        </div>
    )
}

export default System

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from './Login.module.scss'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate()

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                process.env.REACT_APP_API_URL + 'api/users/login',
                {
                    email: username,
                    password: password,
                }
            )

            const token = response.data.token
            localStorage.setItem('token', token)
            nav('/system')
        } catch (error) {
            console.error('Помилка входу:', error)
        }
    }

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.title}>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.input}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
            />
            <button onClick={handleLogin} className={styles.button}>
                Login
            </button>
        </div>
    )
}

export default Login

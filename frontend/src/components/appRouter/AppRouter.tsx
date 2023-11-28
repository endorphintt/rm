import { Routes, Route, Navigate } from 'react-router-dom'
import { publicRoutes, authRoutes } from './routes'
import { HOME_ROUTE } from '../../variables/variables'
import { useEffect, useState } from 'react'

const AppRouter = () => {
    const [isAuth, setIsAuth] = useState<string>('')

    useEffect(() => {
        setIsAuth(localStorage.token)
    }, [localStorage.token])

    return (
        <div className="appRouter" style={{ backgroundColor: 'black' }}>
            <Routes>
                {isAuth &&
                    authRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                {publicRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
                <Route path="*" element={<Navigate to={'/' + HOME_ROUTE} />} />
            </Routes>
        </div>
    )
}

export default AppRouter

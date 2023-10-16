import { Routes, Route, Navigate } from 'react-router-dom'
import { publicRoutes, authRoutes } from './routes'
import { HOME_ROUTE } from '../../variables/variables'

const AppRouter = () => {
    const user = {
        isAuth: false,
    }
    return (
        <div className="appRouter">
            <Routes>
                {user.isAuth === true &&
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

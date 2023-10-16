import c from './App.module.scss'
import AppRouter from './components/appRouter/AppRouter'

import { useEffect, useState } from 'react'
import Intro from './components/intro/Intro'
import Menu from './components/menu/Menu'
import Header from './components/header/Header'
import { MyContextProvider } from './context/Context'

function App() {
    const [loading, setLoading] = useState<boolean>(false)
    const [menu, setMenu] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => setLoading(false), 6000)
    })

    return (
        <MyContextProvider>
            <div className={c.app}>
                {loading ? (
                    <Intro />
                ) : (
                    <div className={c.app__container}>
                        <Header setMenu={() => setMenu(true)} />
                        <AppRouter />
                        <Menu menu={menu} setMenu={() => setMenu(false)} />
                    </div>
                )}
            </div>
        </MyContextProvider>
    )
}

export default App

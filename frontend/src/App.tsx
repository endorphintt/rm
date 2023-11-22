import c from './App.module.scss'
import AppRouter from './components/appRouter/AppRouter'

import { useEffect, useState } from 'react'
import Intro from './components/intro/Intro'
import Menu from './components/menu/Menu'
import Header from './components/header/Header'
import { MyContextProvider } from './context/Context'
import Call from './components/call/call'
import ContactPopup from './components/ContactPopup/ContactPopup'

function App() {
    const [loading, setLoading] = useState<boolean>(true)
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
                        <Call />
                        <ContactPopup />
                    </div>
                )}
            </div>
        </MyContextProvider>
    )
}

export default App

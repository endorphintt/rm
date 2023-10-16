import c from './Header.module.scss'

import { useEffect, useState } from 'react'
import { useMyContext } from '../../context/Context'
import { useNavigate } from 'react-router-dom'

interface Props {
    setMenu: () => void
}

const Header: React.FC<Props> = ({ setMenu }) => {
    const [scrollY, setScrollY] = useState(0)
    const { data, setData } = useMyContext()
    const nav = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header
            className={c.header}
            style={{
                backgroundColor:
                    scrollY > 100 ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            }}
        >
            <img
                src="./img/logo_white_small.png"
                alt="realsy management logo"
                className={c.header__logo}
            />
            <div className={c.header__buttons}>
                <div className={c.header__lan}>
                    <button
                        onClick={() => {
                            setData('pl')
                        }}
                        className={c.header__lanItem}
                        style={{
                            backgroundColor:
                                data === 'pl' ? 'white' : 'transparent',
                            color: data === 'pl' ? 'black' : 'white',
                        }}
                    >
                        pl
                    </button>
                    <span className={c.header__span}>/</span>
                    <button
                        onClick={() => {
                            setData('en')
                        }}
                        className={c.header__lanItem}
                        style={{
                            backgroundColor:
                                data === 'en' ? 'white' : 'transparent',
                            color: data === 'en' ? 'black' : 'white',
                        }}
                    >
                        en
                    </button>
                </div>
                <button className={c.header__menu} onClick={setMenu}></button>
            </div>
        </header>
    )
}

export default Header

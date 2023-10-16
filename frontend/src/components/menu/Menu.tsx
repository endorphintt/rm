import { items, links } from './consts'
import c from './Menu.module.scss'
import { NavLink } from 'react-router-dom'
import { useMyContext } from '../../context/Context'

interface Props {
    setMenu: () => void
    menu: boolean
}

const Menu: React.FC<Props> = ({ setMenu, menu }) => {
    const { data, setData } = useMyContext()

    return (
        <div
            className={c.menu}
            style={{
                transform: menu ? 'translateX(0)' : 'translateX(-100%)',
            }}
        >
            <div className={c.menu__header}>
                <img
                    src="./img/RM_8_without_background.png"
                    alt="realsy management logo"
                    className={c.menu__logo}
                />
                <button className={c.menu__cancel} onClick={setMenu}></button>
            </div>
            <div className={c.menu__links}>
                {items.map((item) => (
                    <NavLink
                        to={'/' + item.path}
                        key={item.id}
                        onClick={setMenu}
                        className={c.menu__link}
                    >
                        {data === 'pl' ? item.namePL : item.nameEN}
                    </NavLink>
                ))}
            </div>
            <div className={c.menu__social}>
                {links.map((link) => (
                    <a
                        key={link.id}
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={c.menu__social_item}
                    >
                        <img src={link.pathToImg} alt={link.name} />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Menu

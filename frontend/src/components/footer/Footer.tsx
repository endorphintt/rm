import { useState } from 'react'
import { useMyContext } from '../../context/Context'
import {
    APARTMENTS_ROUTE,
    HOME_ROUTE,
    OFFERS_ROUTE,
} from '../../variables/variables'
import c from './Footer.module.scss'

const Footer = () => {
    const [pop, setPop] = useState<boolean>(false)
    const { data } = useMyContext()
    const links = [
        {
            namePL: 'Realsy Management',
            nameEN: 'Realsy Management',
            link: HOME_ROUTE,
        },
        { namePL: 'strona główna', nameEN: 'home', link: HOME_ROUTE },
        { namePL: 'oferta', nameEN: 'offers', link: OFFERS_ROUTE },
        {
            namePL: 'najem hybrydowy',
            nameEN: 'hybrid rental',
            link: OFFERS_ROUTE,
        },
        { namePL: 'mieszkania', nameEN: 'apartments', link: APARTMENTS_ROUTE },
    ]

    return (
        <div className={c.footer_container}>
            <div
                className={c.privacyPopup}
                style={{ display: pop ? 'flex' : 'none' }}
            >
                <p className={c.privacyPopup__text}>
                    {data === 'pl'
                        ? 'W związku z RODO, przysługuje Państwu prawo dostępu do swoich danych osobowych, sprostowania danych osobowych, usunięcia danych osobowych, ograniczenia przetwarzania danych osobowych, sprzeciwu wobec przetwarzania danych osobowych, przenoszenia danych osobowych.'
                        : 'In connection with the GDPR, you have the right to access your personal data, rectify personal data, delete personal data, limit the processing of personal data, object to the processing of personal data, and transfer personal data.'}
                </p>
                <button
                    onClick={() => setPop(false)}
                    className={c.privacyPopup__close}
                >
                    {data === 'pl' ? 'zamknij' : 'close'}
                </button>
            </div>
            <div className={c.footer}>
                <div className={c.footer__body}>
                    <div className={c.footer__nav}>
                        {links.map((link) => (
                            <button className={c.footer__nav_item}>
                                {data === 'pl' ? link.namePL : link.nameEN}
                            </button>
                        ))}
                    </div>
                    <img
                        className={c.logo}
                        src="./img/RM_7_without_background 3.png"
                        alt="logo"
                    />
                    <div className={c.footer__links}>
                        <p className={c.footer__links_title}>
                            {data === 'pl'
                                ? 'Nasze  portale społeczniściowe:'
                                : 'Our social media platforms:'}
                        </p>
                        <div className={c.footer__socials}>
                            <button className={c.footer__social}>
                                <img src="./img/fb_gray.png" alt="fb" />
                            </button>
                            <button className={c.footer__social}>
                                <img src="./img/ins_gray.png" alt="ins" />
                            </button>
                            <button className={c.footer__social}>
                                <img src="./img/link_gray.png" alt="ld" />
                            </button>
                        </div>
                    </div>
                </div>
                <p className={c.privacy}>
                    <button onClick={() => setPop(true)}>
                        {data === 'pl'
                            ? 'Polityka prywatności'
                            : 'Privacy policy'}
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Footer

import { useState } from 'react'
import { useMyContext } from '../../context/Context'
import {
    APARTMENTS_ROUTE,
    HOME_ROUTE,
    OFFERS_ROUTE,
} from '../../variables/variables'
import c from './Footer.module.scss'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const [pop, setPop] = useState<boolean>(false)
    const { data } = useMyContext()
    const nav = useNavigate()
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
                    <div className={c.footer__map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.232393974256!2d17.04611879636701!3d51.117086120650704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9d08f66ecc1%3A0xf32ef25eeba66607!2sHenryka%20Sienkiewicza%2034a%2F29%2C%2050-335%20Wroc%C5%82aw!5e0!3m2!1sen!2spl!4v1719098143629!5m2!1sen!2spl"
                            width="200"
                            height="200"
                            loading="lazy"
                        ></iframe>
                    </div>

                    <div className={c.footer__links}>
                        <p className={c.footer__links_title}>
                            {data === 'pl'
                                ? 'Nasze  portale społeczniściowe:'
                                : 'Our social media platforms:'}
                        </p>
                        <div className={c.footer__socials}>
                            <button
                                onClick={() =>
                                    window.open(
                                        'https://www.facebook.com/profile.php?id=61552262336445',
                                        '_blank'
                                    )
                                }
                                className={c.footer__social}
                            >
                                <img src="/img/fb_gray.png" alt="fb" />
                            </button>
                            <button
                                onClick={() =>
                                    window.open(
                                        'https://instagram.com/realsy_management?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr',
                                        '_blank'
                                    )
                                }
                                className={c.footer__social}
                            >
                                <img src="/img/ins_gray.png" alt="ins" />
                            </button>
                            <button
                                onClick={() =>
                                    window.open(
                                        'https://www.linkedin.com/company/realsy-management/',
                                        '_blank'
                                    )
                                }
                                className={c.footer__social}
                            >
                                <img src="/img/link_gray.png" alt="ld" />
                            </button>
                        </div>
                    </div>
                    <div className={c.footer__nav}>
                        {links.map((link) => (
                            <button
                                key={link.namePL}
                                className={c.footer__nav_item}
                                onClick={() => {
                                    nav('/' + link.link)
                                    console.log('adw')
                                }}
                            >
                                {data === 'pl' ? link.namePL : link.nameEN}
                            </button>
                        ))}
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

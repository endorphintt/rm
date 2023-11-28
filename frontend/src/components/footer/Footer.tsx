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
                    <div className={c.footer__map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.3171956993137!2d17.034102483803817!3d51.10933809843993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc27642ef2b15%3A0x8ddb756ed7ea43f0!2sBiskupia%2011%2FLok.%20202%2C%2050-149%20Wroc%C5%82aw!5e0!3m2!1suk!2spl!4v1699569681484!5m2!1suk!2spl"
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

import { useMyContext } from '../../context/Context'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import PagesTop from '../pagesTop/PagesTop'
import Reviews from '../reviews/Reviews'
import c from './About.module.scss'

const About = () => {
    const { data } = useMyContext()
    return (
        <div className={c.about}>
            <PagesTop title={data === 'pl' ? 'O nas' : 'About'} />
            <div className={c.main}>
                <div className={c.main__text}>
                    <div className={c.main__title}>
                        Realsy <br /> Management
                    </div>
                    <div className={c.main__description}>
                        {data === 'pl'
                            ? 'Realsy Management to dynamiczna i młoda firma, która specjalizuje się w kompleksowym zarządzaniu nieruchomościami. Nasza obecność na rynku to wynik naszego zaangażowania w dostarczanie usług o najwyższej jakości. Naszą misją jest "odblokowywanie potencjału nieruchomości" dla naszych klientów, a nasze usługi obejmują zarządzanie najmem hybrydowym, najmem i wynajmem nieruchomości, a także pomoc w zakupie i sprzedaży.'
                            : 'Realsy Management is a dynamic and young company that specializes in comprehensive real estate management. Our presence on the market is the result of our commitment to providing the highest quality services. Our mission is to "unlock the potential of real estate" for our clients, and our services include hybrid lease management, rental and rental properties, as well as assistance with purchases and sales.'}
                    </div>
                </div>
                <img
                    className={c.main__img}
                    src="./img/about.png"
                    alt="realy management"
                />
            </div>
            <article className={c.why}>
                <h3 className={c.why__title}>
                    {data === 'pl'
                        ? 'Dlaczego warto wybrać Realsy Management?'
                        : 'Why choose Realsy Management?'}
                </h3>
                <p className={c.why__text}>
                    {data === 'pl'
                        ? 'Nasz sukces opiera się na skuteczności i zaufaniu naszych klientów. Nie tylko zarządzamy nieruchomościami – tworzymy możliwości. Nasza filozofia "Unlocking properties potential" jest głównym źródłem naszej motywacji, by pomagać klientom w osiąganiu większych zysków i sukcesów na rynku nieruchomości. Jeśli szukasz partnera, który zrozumie Twoje cele i pomoże Ci je osiągnąć w świecie nieruchomości, to Realsy Management jest tu, aby Cię wesprzeć. Skontaktuj się z nami już dziś i pozwól nam pomóc Ci w odblokowaniu potencjału Twoich nieruchomości.'
                        : 'Our success is based on the effectiveness and trust of our clients. We don\'t just manage properties - we create opportunities. Our philosophy of "Unlocking properties potential" is the main source of our motivation to help clients achieve greater profits and success in the real estate market. If you are looking for a partner who will understand your goals and help you achieve them in the world of real estate, then Realsy Management is here to support you. Contact us today and let us help you unlock the potential of your properties.'}
                </p>
            </article>
            <Reviews />
            <Contact />
            <Footer />
        </div>
    )
}

export default About

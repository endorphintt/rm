import c from './homeAbout.module.scss'
import { useMyContext } from '../../context/Context'
import BranchButton from '../branchButton/branchButton'
import { ABOUT_ROUTE, HOME_ROUTE } from '../../variables/variables'

const HomeAbout: React.FC = () => {
    const { data } = useMyContext()

    return (
        <article className={c.homeAbout}>
            <h2 className={c.title}>{data === 'pl' ? 'o nas' : 'about'}</h2>
            <div className={c.homeAbout__container}>
                <div className={c.homeAbout__text}>
                    <h2 className={c.homeAbout__title}>
                        Realsy <br /> Management
                    </h2>
                    <div className={c.homeAbout__description}>
                        {data === 'pl' ? (
                            <p>
                                Dynamiczna i młoda firma, która specjalizuje się
                                w kompleksowym zarządzaniu nieruchomościami.
                                Nasza obecność na rynku to wynik naszego
                                zaangażowania w dostarczanie usług o najwyższej
                                jakości. Naszą misją jest "odblokowywanie
                                potencjału nieruchomości" dla naszych klientów,
                                a nasze usługi obejmują zarządzanie najmem
                                hybrydowym, najmem i wynajmem nieruchomości, a
                                także pomoc w zakupie i sprzedaży.
                            </p>
                        ) : (
                            <p>
                                A dynamic and young company that specializes in
                                comprehensive real estate management. Our
                                presence on the market is the result of our
                                commitment to providing the highest quality
                                services. Our mission is to "unlock the
                                potential of real estate" for our clients, and
                                our services include hybrid lease management,
                                rental and rental properties, as well as
                                assistance with purchases and sales.
                            </p>
                        )}
                    </div>
                </div>
                <img
                    className={c.homeAbout__img}
                    src="./img/home-about.png"
                    alt="realsy details"
                />
                <img
                    className={c.homeAbout__line}
                    src="./img/home-about-line.png"
                    alt="realsy details"
                />
            </div>
            <div className={c.homeAbout__button}>
                <BranchButton
                    link={ABOUT_ROUTE}
                    PLname="więcej"
                    ENname="more"
                    data={data}
                />
            </div>
        </article>
    )
}

export default HomeAbout

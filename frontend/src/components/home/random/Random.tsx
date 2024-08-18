import c from './Random.module.scss'
import { useMyContext } from '../../../context/Context'
import { useNavigate } from 'react-router-dom'
import {
    APARTMENTS_ROUTE,
    BLOG_ROUTE,
    OFFERS_ROUTE,
} from '../../../variables/variables'

const Random = () => {
    const nav = useNavigate()
    const { data } = useMyContext()
    return (
        <article className={c.random_container}>
            <div className={c.random}>
                <div className={`${c.row} ${c.first}`}>
                    <div
                        onClick={() => nav('/' + BLOG_ROUTE)}
                        className={`${c.item} ${c.first}`}
                    >
                        <div className={c.item__title}>
                            <h2>
                                {data === 'pl'
                                    ? 'OSTATNIE MIESZKANIA  W CENTRUM WROCŁAWIA'
                                    : 'LAST APARTMENTS IN THE CENTER OF WROCŁAW'}
                            </h2>
                        </div>
                    </div>
                    <div
                        onClick={() => nav('/' + OFFERS_ROUTE)}
                        className={`${c.item} ${c.second}`}
                    >
                        <div className={c.item__title}>
                            <h2>
                                {data === 'pl'
                                    ? 'Jak działa zarządzanie najmem z Realsy?'
                                    : 'How management works renting from Realsy?'}
                            </h2>
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => nav('/' + BLOG_ROUTE)}
                    className={`${c.row} ${c.second}`}
                >
                    <div className={`${c.item} ${c.third}`}>
                        <div className={c.item__title}>
                            <h2>
                                {data === 'pl'
                                    ? 'Na co musisz wzrócić swoja uwagę przed zakupem mieszkania?'
                                    : 'What do you need to pay attention before buying an apartment?'}
                            </h2>
                        </div>
                    </div>
                    <div
                        onClick={() => nav('/' + BLOG_ROUTE)}
                        className={`${c.item} ${c.fourth}`}
                    >
                        <div className={c.item__title}>
                            <h2>
                                {data === 'pl'
                                    ? 'JAKIE BĘDA CENY NA NIERUCHOMOŚCI W 2024?'
                                    : 'WHAT WILL REAL ESTATE PRICES BE IN 2024?'}
                            </h2>
                        </div>
                    </div>
                </div>
                <div className={`${c.row} ${c.first}`}>
                    <div
                        onClick={() => nav('/' + OFFERS_ROUTE)}
                        className={`${c.item} ${c.fifth}`}
                    >
                        <div className={c.item__title}>
                            <h2>
                                {data === 'pl'
                                    ? 'Przeczytaj jak wygląda współpraca z Realsy'
                                    : 'Read what cooperation with Realsy looks like'}
                            </h2>
                        </div>
                    </div>
                    <div
                        onClick={() => nav('/' + APARTMENTS_ROUTE)}
                        className={`${c.item} ${c.sixth}`}
                    >
                        <div className={c.item__title}>
                            <h2>
                                {data === 'pl'
                                    ? 'Luksusowe mieszkanie 50m około Wyspy Słodowej'
                                    : 'Luxurious apartment 50m near Słodowa Island'}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Random

import { useMyContext } from '../../../context/Context'
import { OFFERS_ROUTE } from '../../../variables/variables'
import c from './Hello.module.scss'
import { useNavigate } from 'react-router-dom'

const Hello: React.FC = () => {
    const { data } = useMyContext()
    const nav = useNavigate()

    return (
        <article className={c.hello}>
            <img
                className={c.hello__castle}
                src="./img/castle.png"
                alt="realsy management castle"
            />
            <img
                className={c.hello__horse}
                src="./img/horse.png"
                alt="realsy management horse"
            />
            <h1 className={c.hello__title}>
                Realsy <br /> Management
            </h1>
            <button
                onClick={() => nav('/' + OFFERS_ROUTE)}
                className={c.hello__button}
            >
                {data === 'pl' ? 'oferta' : 'offers'}
            </button>
        </article>
    )
}

export default Hello

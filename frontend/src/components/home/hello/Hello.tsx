import { useMyContext } from '../../../context/Context'
import { OFFERS_ROUTE } from '../../../variables/variables'
import c from './Hello.module.scss'
import { useNavigate } from 'react-router-dom'

const Hello: React.FC = () => {
    const { data } = useMyContext()
    const nav = useNavigate()
    const isMobile =
        /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )

    return (
        <article
            style={{ height: isMobile ? '90vh' : '100vh' }}
            className={c.hello}
        >
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
                {data === 'pl' ? 'usługi' : 'offers'}
            </button>
        </article>
    )
}

export default Hello

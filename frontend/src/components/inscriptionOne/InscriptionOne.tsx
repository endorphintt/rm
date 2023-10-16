import { useMyContext } from '../../context/Context'
import c from './InscriptionOne.module.scss'

const InscriptionOne: React.FC = () => {
    const { data } = useMyContext()

    return (
        <article className={c.inscriptionOne}>
            <p className={c.inscriptionOne__text}>
                {data === 'pl'
                    ? 'nasza pasja to tworzenie możliwości w nieruchomościach'
                    : 'our passion is creating opportunities in real estate'}
            </p>
        </article>
    )
}

export default InscriptionOne

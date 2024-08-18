import c from './Partners.module.scss'
import { useMyContext } from '../../context/Context'

const Partners = () => {
    const { data } = useMyContext()
    return (
        <div className={c.partners}>
            <h2 className={c.partners__title}>
                {data == 'pl' ? 'nasi partnerzy' : 'partners'}
            </h2>
            <div className={c.partners__items}>
                <img src="./img/partner1.png" alt="partner png" />
                <img src="./img/plme.png" alt="partner png" />
                <img src="./img/arb.png" alt="partner png" />
                <img src="./img/booking.png" alt="partner png" />
            </div>
        </div>
    )
}

export default Partners

import { useMyContext } from '../../context/Context'
import c from './Apartments.module.scss'
import ApartmentsTop from './apartmentsTop/ApartmentsTop'

const Apartments = () => {
    const { data } = useMyContext()
    return (
        <div className={c.apartments}>
            <ApartmentsTop
                title={data === 'pl' ? 'Mieszkania' : 'Apartments'}
            />
        </div>
    )
}

export default Apartments

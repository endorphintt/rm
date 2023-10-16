import InscriptionOne from '../inscriptionOne/InscriptionOne'
import OffersScroll from '../offersScroll/OffersScroll'
import Hello from './hello/Hello'

const Home: React.FC = () => {
    return (
        <div style={{ height: '10000px', backgroundColor: 'black' }}>
            <Hello />
            <InscriptionOne />
            <OffersScroll />
        </div>
    )
}

export default Home

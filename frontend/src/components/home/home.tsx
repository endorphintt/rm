import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import HomeAbout from '../homeAbout/homeAbout'
import InscriptionOne from '../inscriptionOne/InscriptionOne'
import InscriptionTwo from '../inscriptionTwo/InscriptionTwo'
import Managing from '../managing/Managing'
import OffersScroll from '../offersScroll/OffersScroll'
import Reviews from '../reviews/Reviews'
import Hello from './hello/Hello'
import Random from './random/Random'

const Home: React.FC = () => {
    return (
        <div>
            <Hello />
            {/* <InscriptionOne /> */}
            <OffersScroll />
            <HomeAbout />
            <InscriptionTwo />
            <Managing />
            <Random />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home

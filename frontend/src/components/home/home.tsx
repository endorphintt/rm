import { useEffect, useRef } from 'react'
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
import Partners from '../partners/Partners'

const Home: React.FC = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [false])

    const ref = useRef<any>()

    return (
        <div>
            <Hello />
            {/* <InscriptionOne /> */}
            <OffersScroll />
            <HomeAbout />
            <div
                onClick={() =>
                    ref.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    })
                }
                className="ins_scroll_container"
                style={{
                    cursor: 'pointer',
                }}
            >
                <InscriptionTwo />
            </div>
            <Managing />
            <Random />
            <Reviews />
            <div ref={ref} className="contact__scroll_container">
                <Contact />
            </div>
            <Partners />
            <Footer />
        </div>
    )
}

export default Home

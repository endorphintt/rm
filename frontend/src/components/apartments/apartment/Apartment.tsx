import c from './Apartment.module.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useMyContext } from '../../../context/Context'
import { Apartment } from '../Apartments'
import PagesTop from '../../pagesTop/PagesTop'
import Reviews from '../../reviews/Reviews'
import Contact from '../../contact/Contact'
import Footer from '../../footer/Footer'
import ApartmentSlider from './apartmentsSlider/ApartmentSlider'

const ApartmentPage = () => {
    const { data } = useMyContext()
    const [isMore, setIsMore] = useState<boolean>(false)
    const [apartmentData, setApartmentData] = useState<Apartment | null>(null)
    const params = useParams()
    async function getApartmentById(id: string) {
        try {
            const response = await axios.get(
                `http://localhost:5435/api/apartments/${id}`
            )
            setApartmentData(response.data)
        } catch (error: any) {
            console.error('Error fetching data:', error.message)
        }
    }
    useEffect(() => {
        if (params.id) {
            getApartmentById(params.id)
        }
    }, [params.id])
    return (
        <div className={c.container}>
            {apartmentData ? (
                <div className={c.container}>
                    <PagesTop
                        title={data === 'pl' ? 'Mieszkania' : 'Apartments'}
                    />
                    <ApartmentSlider images={apartmentData.images} />
                    <div className={c.body}>
                        <h3 className={c.apartment__title}>
                            {data === 'pl'
                                ? apartmentData.namePL
                                : apartmentData.nameEN}
                        </h3>
                        <p className={c.apartment__address}>
                            <img src="/img/location_green.svg" alt="location" />
                            {apartmentData.address}
                        </p>
                        <div className={c.info}>
                            <p className={c.info__title}>
                                {data === 'pl'
                                    ? 'Sczegóły ogłoszenia:'
                                    : 'details:'}
                            </p>
                            <div className={c.info__items}>
                                <div className={c.info__item}>
                                    <div className={c.info__row}>
                                        <p className={c.info__column}>
                                            {data === 'pl'
                                                ? 'Powierzchnia'
                                                : 'Area'}
                                        </p>
                                        <p className={c.info__column}>
                                            {apartmentData.square}
                                        </p>
                                    </div>
                                    <div className={c.info__row}>
                                        <p className={c.info__column}>
                                            {data === 'pl'
                                                ? 'Liczba pokoi'
                                                : 'number of rooms'}
                                        </p>
                                        <p className={c.info__column}>
                                            {apartmentData.rooms}
                                        </p>
                                    </div>
                                    <div className={c.info__row}>
                                        <p className={c.info__column}>
                                            {data === 'pl' ? 'Piętro' : 'Floor'}
                                        </p>
                                        <p className={c.info__column}>
                                            {apartmentData.floor}
                                        </p>
                                    </div>
                                    <div className={c.info__row}>
                                        <p className={c.info__column}>
                                            {data === 'pl'
                                                ? 'Czynsz'
                                                : 'Maintenance'}
                                        </p>
                                        <p className={c.info__column}>
                                            {apartmentData.czynsz}
                                        </p>
                                    </div>
                                </div>
                                <div className={c.info__item}>
                                    <div className={c.info__row}>
                                        <p className={c.info__column}>
                                            {data === 'pl'
                                                ? 'Stan wykończenia'
                                                : 'Finishing condition'}
                                        </p>
                                        <p className={c.info__column}>
                                            {apartmentData.stan}
                                        </p>
                                    </div>
                                    <div className={c.info__row}>
                                        <p className={c.info__column}>
                                            {data === 'pl'
                                                ? 'Balkon/ ogród/ taras'
                                                : 'balkony/ garden/ terrace'}
                                        </p>
                                        <p className={c.info__column}>
                                            {apartmentData.balkon}
                                        </p>
                                    </div>
                                    <div className={c.info__row}>
                                        <p className={c.info__column}>
                                            {data === 'pl'
                                                ? 'Parking'
                                                : 'Parking'}
                                        </p>
                                        <p className={c.info__column}>
                                            {apartmentData.parking}
                                        </p>
                                    </div>
                                    <div className={c.info__row}>
                                        <p className={c.info__column}>
                                            {data === 'pl'
                                                ? 'Ogrzewanie'
                                                : 'Heating'}
                                        </p>
                                        <p className={c.info__column}>
                                            {apartmentData.heating}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={c.description}>
                                <p className={c.description__title}>
                                    {data === 'pl' ? 'Opis' : 'Description'}
                                </p>
                                <p
                                    className={c.description__text}
                                    style={{
                                        maxHeight: isMore ? 'none' : '500px',
                                    }}
                                >
                                    {data === 'pl'
                                        ? apartmentData.descriptionPL
                                        : apartmentData.descriptionEN}
                                </p>
                                <button
                                    onClick={() => setIsMore(!isMore)}
                                    className={c.description__button}
                                >
                                    {!isMore
                                        ? data === 'pl'
                                            ? 'Więcej'
                                            : 'More'
                                        : data === 'pl'
                                        ? 'Mniej'
                                        : 'Less'}
                                    <span
                                        style={{
                                            transform: `rotate(${
                                                isMore ? '180deg' : '0deg'
                                            })`,
                                        }}
                                    ></span>
                                </button>
                            </div>
                            <div className={c.map}></div>
                        </div>
                    </div>
                    <Reviews />
                    <Contact />
                    <Footer />
                </div>
            ) : (
                <span></span>
            )}
        </div>
    )
}

export default ApartmentPage

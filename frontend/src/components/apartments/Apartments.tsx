import axios from 'axios'
import { useMyContext } from '../../context/Context'
import c from './Apartments.module.scss'
import ApartmentsTop from './apartmentsTop/ApartmentsTop'
import { useEffect, useState } from 'react'
import Reviews from '../reviews/Reviews'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import { useNavigate } from 'react-router-dom'
import { APARTMENTS_ROUTE, BLOG_ROUTE } from '../../variables/variables'

export interface Apartment {
    id: number
    namePL: string
    nameEN: string
    price: string
    images: string
    citiesId: number
    typeId: number
    appointmentId: number
    map: string
    descriptionPL: string
    descriptionEN: string
    square: string
    rooms: string
    floor: string
    czynsz: string
    stan: string
    balkon: string
    parking: string
    heating: string
    address: string
}

const Apartments = () => {
    const [apartments, setApartments] = useState<Apartment[] | null>(null)
    const { data } = useMyContext()
    const nav = useNavigate()

    function getStringBeforeComma(inputString: string) {
        const commaIndex = inputString.indexOf(',')

        if (commaIndex !== -1) {
            return inputString.substring(0, commaIndex)
        }

        // Якщо кома не знайдена, повертаємо весь рядок
        return inputString
    }

    // fetch data
    const fetchData = async (
        appointmentId?: number,
        typeId?: number,
        citiesId?: number
    ) => {
        try {
            let url = process.env.REACT_APP_API_URL + 'api/apartments'

            if (appointmentId !== undefined) {
                url += `?appointmentId=${appointmentId}`
            }
            if (typeId !== undefined) {
                url += `${url.includes('?') ? '&' : '?'}typeId=${typeId}`
            }
            if (citiesId !== undefined) {
                url += `${url.includes('?') ? '&' : '?'}citiesId=${citiesId}`
            }
            console.log(url)
            const response = await axios.get(url)
            console.log(response.data)
            setApartments(response.data)
        } catch (error) {
            console.error('Error fetching data:', error)
            throw error
        }
    }

    useEffect(() => {
        fetchData()
    }, [false])
    return (
        <div className={c.apartments}>
            <ApartmentsTop
                fetchData={fetchData}
                title={data === 'pl' ? 'Mieszkania' : 'Apartments'}
            />
            <div className={c.container}>
                {apartments ? (
                    <div className={c.items}>
                        {apartments.length != 0 ? (
                            apartments.map((item) => (
                                <div
                                    onClick={() =>
                                        nav(
                                            '/' +
                                                APARTMENTS_ROUTE +
                                                '/' +
                                                item.id
                                        )
                                    }
                                    className={c.item}
                                >
                                    <div
                                        style={{
                                            backgroundImage: `url(${
                                                process.env.REACT_APP_API_URL +
                                                '/' +
                                                getStringBeforeComma(
                                                    item.images
                                                )
                                            })`,
                                        }}
                                        className={c.item__img}
                                    ></div>
                                    <h4 className={c.item__title}>
                                        {data === 'pl'
                                            ? item.namePL
                                            : item.nameEN}
                                    </h4>
                                    <p className={c.item__address}>
                                        {item.address}
                                    </p>
                                    <div className={c.item__info}>
                                        <p className={c.item__price}>
                                            {item.price}
                                        </p>
                                        <p className={c.item__rooms}>
                                            {item.rooms}
                                        </p>
                                        <p className={c.item__square}>
                                            {item.square}
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className={c.error}>
                                {data === 'pl'
                                    ? 'Niestety nie ma ofert na te parametry'
                                    : 'Unfortunately, there are no offers for these parameters'}
                            </p>
                        )}
                    </div>
                ) : (
                    <span></span>
                )}
                <Reviews />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default Apartments

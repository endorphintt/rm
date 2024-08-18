import c from './Apartment.module.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useMyContext } from '../../../context/Context'
import { Apartment, apiClient } from '../Apartments'
import PagesTop from '../../pagesTop/PagesTop'
import Reviews from '../../reviews/Reviews'
import Contact from '../../contact/Contact'
import Footer from '../../footer/Footer'
import ApartmentSlider from './apartmentsSlider/ApartmentSlider'
import ReactMarkdown from 'react-markdown'

const ApartmentPage = () => {
    const { data } = useMyContext()
    const [isMore, setIsMore] = useState<boolean>(false)
    const [apartmentData, setApartmentData] = useState<Apartment | null>(null)
    const params = useParams()

    // fetch data
    async function getApartmentById(id: string) {
        try {
            const response = await apiClient.get(
                `/proxy/offer/details?company=15968&token=f6fb0d91ae&id=${id}`
            )
            setApartmentData(response.data.data)
        } catch (error) {
            console.error('Error fetching data:', error)
            throw error
        }
    }
    useEffect(() => {
        if (params.id) {
            getApartmentById(params.id)
        }
    }, [params.id])

    const mieszkanieData = [
        [
            {
                id: 1,
                namePl: 'Powierzchnia',
                nameEn: 'Area',
                value: `${apartmentData?.areaTotal} m`,
            },
            {
                id: 2,
                namePl: 'Liczba pokoi',
                nameEn: 'number of rooms',
                value: apartmentData?.apartmentRoomNumber,
            },
            {
                id: 3,
                namePl: 'cena',
                nameEn: 'price',
                value: apartmentData?.price,
            },
            {
                id: 4,
                namePl: 'Opłaty',
                nameEn: 'Maintenance',
                value: apartmentData?.apartmentRent,
            },
        ],
        [
            {
                id: 5,
                namePl: 'Rok budynku',
                nameEn: 'building year',
                value: apartmentData?.buildingYear,
            },
            {
                id: 6,
                namePl: 'Piętro',
                nameEn: 'Floor',
                value: apartmentData?.apartmentFloor,
            },
            {
                id: 7,
                namePl: 'Parking',
                nameEn: 'Parking',
                value: apartmentData?.additionalParkingunderground,
            },
            {
                id: 8,
                namePl: 'Ogrzewanie',
                nameEn: 'Heating',
                value: apartmentData?.buildingHeating,
            },
        ],
        [
            {
                id: 14,
                namePl: 'typ nieruchomości',
                nameEn: 'estate type',
                value: apartmentData?.typeName,
            },
            {
                id: 15,
                namePl: 'miasto',
                nameEn: 'city',
                value: apartmentData?.locationCityName,
            },
            {
                id: 16,
                namePl: 'ulica',
                nameEn: 'street',
                value: apartmentData?.locationStreetName,
            },
            {
                id: 17,
                namePl: 'kaucja',
                nameEn: 'deposit',
                value: apartmentData?.apartmentDeposit,
            },
        ],
        [
            {
                id: 20,
                namePl: 'ulica',
                nameEn: 'street',
                value: apartmentData?.locationStreetName,
            },
            {
                id: 23,
                namePl: 'liczba piętr',
                nameEn: 'number of floors',
                value: apartmentData?.buildingFloornumber,
            },
        ],
    ]

    const dzialkaData = [
        [
            {
                id: 1,
                namePl: 'powierzchnia',
                nameEn: 'area',
                value: apartmentData?.areaTotal,
            },
            {
                id: 2,
                namePl: 'cena',
                nameEn: 'price',
                value: apartmentData?.price,
            },

            {
                id: 3,
                namePl: 'nazwisko agenta',
                nameEn: 'agent last name',
                value: apartmentData?.contactLastname,
            },
            {
                id: 4,
                namePl: 'telefon do kontaktu',
                nameEn: 'contact number',
                value: apartmentData?.contactPhone,
            },
        ],
        [
            {
                id: 5,
                namePl: 'imię agenta',
                nameEn: 'agent name',
                value: apartmentData?.contactFirstname,
            },
            {
                id: 6,
                namePl: 'ulica',
                nameEn: 'street',
                value: apartmentData?.locationStreetName,
            },
            {
                id: 7,
                namePl: 'typ ogłoszenia',
                nameEn: 'sale type',
                value: apartmentData?.typeName,
            },
        ],
    ]

    const contactData = [
        [
            {
                id: 1,
                namePl: 'imie agenta',
                nameEn: 'agent name',
                value: apartmentData?.contactFirstname,
            },
            {
                id: 2,
                namePl: 'nazwisko agenta',
                nameEn: 'agent last name',
                value: apartmentData?.contactLastname,
            },
            {
                id: 3,
                namePl: 'kontakt',
                nameEn: 'contact',
                value: apartmentData?.contactPhone,
            },
        ],
    ]

    return (
        <div className={c.container}>
            {apartmentData ? (
                <div className={c.container}>
                    <PagesTop
                        title={data === 'pl' ? 'Mieszkania' : 'Apartments'}
                    />
                    <ApartmentSlider images={apartmentData.pictures} />
                    <div className={c.body}>
                        <h3 className={c.apartment__title}>
                            {apartmentData.portalTitle}
                        </h3>
                        <p className={c.apartment__address}>
                            <img src="/img/location_green.svg" alt="location" />
                            <a
                                href={
                                    'https://www.google.com/maps/search/?api=1&query=' +
                                    apartmentData.locationCityName +
                                    ', ' +
                                    apartmentData.locationStreetName
                                }
                                target="_blank"
                            >
                                {apartmentData.locationCityName +
                                    ', ' +
                                    apartmentData.locationStreetName}
                            </a>
                        </p>
                        <div className={c.info}>
                            <p className={c.info__title}>
                                {data === 'pl'
                                    ? 'Sczegóły ogłoszenia:'
                                    : 'details:'}
                            </p>

                            {apartmentData.typeName.includes('Mieszkanie') ? (
                                <div className={c.info__items}>
                                    {mieszkanieData.map((item) => (
                                        <div
                                            key={item[0].id}
                                            className={c.info__item}
                                        >
                                            {item.map((raw) => (
                                                <div
                                                    key={raw.id}
                                                    className={c.info__row}
                                                >
                                                    <p
                                                        className={
                                                            c.info__column
                                                        }
                                                    >
                                                        {data === 'pl'
                                                            ? raw.namePl
                                                            : raw.nameEn}
                                                    </p>
                                                    <p
                                                        className={
                                                            c.info__column
                                                        }
                                                    >
                                                        {raw.value
                                                            ? raw.value
                                                            : '-'}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className={c.info__items}>
                                    {dzialkaData.map((item) => (
                                        <div
                                            key={item[0].id}
                                            className={c.info__item}
                                        >
                                            {item.map((raw) => (
                                                <div
                                                    key={raw.id}
                                                    className={c.info__row}
                                                >
                                                    <p
                                                        className={
                                                            c.info__column
                                                        }
                                                    >
                                                        {data === 'pl'
                                                            ? raw.namePl
                                                            : raw.nameEn}
                                                    </p>
                                                    <p
                                                        className={
                                                            c.info__column
                                                        }
                                                    >
                                                        {raw.value
                                                            ? raw.value
                                                            : '-'}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                            <p className={c.info__title}>
                                {data === 'pl' ? 'kontakt:' : 'contact:'}
                            </p>

                            <div className={c.info__items}>
                                {contactData.map((item) => (
                                    <div
                                        key={item[0].id}
                                        className={c.info__item}
                                    >
                                        {item.map((raw) => (
                                            <div
                                                key={raw.id}
                                                className={c.info__row}
                                            >
                                                <p className={c.info__column}>
                                                    {data === 'pl'
                                                        ? raw.namePl
                                                        : raw.nameEn}
                                                </p>
                                                <p className={c.info__column}>
                                                    {raw.value
                                                        ? raw.value
                                                        : '-'}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <div className={c.description}>
                                <p className={c.description__title}>
                                    {data === 'pl' ? 'Opis' : 'Description'}
                                </p>

                                <div
                                    className={c.description__text}
                                    style={{
                                        maxHeight: isMore ? 'none' : '500px',
                                    }}
                                >
                                    <ReactMarkdown skipHtml={true}>
                                        {apartmentData.descriptionPrefix}
                                    </ReactMarkdown>
                                    <ReactMarkdown skipHtml={true}>
                                        {apartmentData.descriptionWebsite}
                                    </ReactMarkdown>
                                </div>
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

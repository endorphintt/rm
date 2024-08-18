import axios from 'axios'
import { useMyContext } from '../../context/Context'
import c from './Apartments.module.scss'
import ApartmentsTop from './apartmentsTop/ApartmentsTop'
import { useEffect, useState } from 'react'
import Reviews from '../reviews/Reviews'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import { useNavigate } from 'react-router-dom'
import { APARTMENTS_ROUTE } from '../../variables/variables'
import ApartmentsCard from './ApartmentsCard'
import PagesTop from '../pagesTop/PagesTop'

export interface Apartments {
    success: boolean
    count: number
    data: {
        id: number
        number: string
        number_export: string
        status: number
        update_date: string
    }[]
}

export interface Apartment {
    id: number
    price: string
    priceCurrency: number
    pricePermeter: string
    areaTotal: string
    portalTitle: string
    contactFirstname: string
    contactLastname: string
    contactPhone: string
    contactEmail: string
    typeName: string
    locationCityName: string
    locationStreetName: string
    descriptionPrefix: string
    descriptionWebsite: string
    pictures: string[]
    apartmentFloor: string
    apartmentRoomNumber: string
    apartmentDeposit: string
    additionalParkingunderground: string
    additionalGarage: string
    additionalLoggia: string
    additionalBalcony: string
    additionalTerrace: string
    additionalParking: string
    buildingHeating: string
    buildingFloornumber: string
    buildingYear: string
    buildingType: string
    availableDate: string
    videoLink: string
    apartmentRent: string
    locationPostal: string
}

export const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

const Apartments = () => {
    const [apartments, setApartments] = useState<Apartments | null>(null)
    const { data } = useMyContext()

    // fetch data

    const fetchData = async () => {
        try {
            const response = await apiClient.get(
                '/proxy/offer/basic-list?company=15968&token=f6fb0d91ae&status=3,99'
            )
            setApartments(response.data)
        } catch (error) {
            console.error('Error fetching data:', error)
            throw error
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        fetchData()
    }, [false])
    return (
        <div className={c.apartments}>
            <PagesTop title="" />
            <div className={c.container}>
                {apartments ? (
                    <div className={c.items}>
                        {apartments.data.length != 0 ? (
                            apartments.data.map((item) => (
                                <ApartmentsCard key={item.id} id={item.id} />
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

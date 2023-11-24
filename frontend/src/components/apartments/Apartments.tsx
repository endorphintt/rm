import axios, { AxiosResponse } from 'axios'
import { useMyContext } from '../../context/Context'
import c from './Apartments.module.scss'
import ApartmentsTop from './apartmentsTop/ApartmentsTop'
import { useEffect, useState } from 'react'

interface Apartment {
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
                    <div>
                        {apartments.map((item) => (
                            <p key={item.id}>{item.namePL}</p>
                        ))}
                    </div>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    )
}

export default Apartments

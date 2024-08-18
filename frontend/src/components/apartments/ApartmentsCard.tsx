import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Apartment, apiClient } from './Apartments'
import c from './Apartments.module.scss'
import { useNavigate } from 'react-router-dom'
import { APARTMENTS_ROUTE } from '../../variables/variables'

interface Props {
    id: number
}

const ApartmentsCard: React.FC<Props> = ({ id }) => {
    const [apartment, setApartment] = useState<Apartment | null>(null)
    const nav = useNavigate()

    // fetch data

    const fetchData = async () => {
        try {
            const response = await apiClient.get(
                `/proxy/offer/details?company=15968&token=f6fb0d91ae&id=${id}`
            )
            setApartment(response.data.data)
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
        <div
            onClick={() => nav('/' + APARTMENTS_ROUTE + '/' + id)}
            className={c.item}
        >
            <div
                style={{
                    backgroundImage: `url(${apartment?.pictures[0]})`,
                }}
                className={c.item__img}
            ></div>
            <h4 className={c.item__title}>{apartment?.portalTitle}</h4>
            <p
                className={c.item__address}
            >{`${apartment?.locationCityName}, ${apartment?.locationStreetName}`}</p>
            <div className={c.item__info}>
                <p className={c.item__price}>{apartment?.price}</p>
                {apartment?.apartmentRoomNumber ? (
                    <p className={c.item__rooms}>
                        {apartment?.apartmentRoomNumber}{' '}
                        {apartment.apartmentRoomNumber == '1'
                            ? 'pokój'
                            : 'pokoje'}
                    </p>
                ) : (
                    <span></span>
                )}
                <p className={c.item__square}>{apartment?.areaTotal}m</p>
            </div>
        </div>
    )
}

export default ApartmentsCard

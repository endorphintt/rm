import { useEffect, useState } from 'react'
import c from '../System.module.scss'
import axios from 'axios'
import { useMyContext } from '../../../context/Context'

interface Filter {
    id: number
    namePL: string
    nameEN: string
}

interface Props {
    handleCityChange: (e: any) => void
    handleTypeChange: (e: any) => void
    handleAppointmentChange: (e: any) => void
    selectedType: '' | number
    selectedCity: '' | number
    selectedAppointment: '' | number
}

const Options: React.FC<Props> = ({
    handleCityChange,
    handleTypeChange,
    handleAppointmentChange,
    selectedType,
    selectedCity,
    selectedAppointment,
}) => {
    const [appointment, setAppointment] = useState<Filter[] | null>(null)
    const [type, setType] = useState<Filter[] | null>(null)
    const [city, setCity] = useState<Filter[] | null>(null)
    const { data } = useMyContext()

    const fetchFormData = async () => {
        try {
            const typesUrl: string =
                process.env.REACT_APP_API_URL + 'api/types' || ''
            const citiesUrl: string =
                process.env.REACT_APP_API_URL + 'api/cities' || ''
            const appointmentsUrl: string =
                process.env.REACT_APP_API_URL + 'api/appointments' || ''
            const typesResponse = await axios.get(typesUrl)
            const typesResponseData = typesResponse.data
            setType(typesResponseData)

            const citiesResponse = await axios.get(citiesUrl)
            const citiesResponseData = citiesResponse.data
            setCity(citiesResponseData)

            const appointmentsResponse = await axios.get(appointmentsUrl)
            const appointmentsResponseData = appointmentsResponse.data
            setAppointment(appointmentsResponseData)

            handleCityChange(appointmentsResponseData[0].id)
            handleTypeChange(typesResponseData[0].id)
            handleAppointmentChange(citiesResponseData[0].id)
        } catch (error: any) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchFormData()
    }, [])

    return (
        <div>
            {city && appointment && type ? (
                <div className={c.system__form}>
                    <select value={selectedType} onChange={handleTypeChange}>
                        <option>choose type</option>
                        {type.map((item) => (
                            <option key={item.id} value={item.id}>
                                {data === 'pl' ? item.namePL : item.nameEN}
                            </option>
                        ))}
                    </select>
                    <select
                        value={selectedAppointment}
                        onChange={handleAppointmentChange}
                    >
                        <option>choose appointment</option>
                        {appointment.map((item) => (
                            <option key={item.id} value={item.id}>
                                {data === 'pl' ? item.namePL : item.nameEN}
                            </option>
                        ))}
                    </select>
                    <select value={selectedCity} onChange={handleCityChange}>
                        <option>choose city</option>
                        {city.map((item) => (
                            <option key={item.id} value={item.id}>
                                {data === 'pl' ? item.namePL : item.nameEN}
                            </option>
                        ))}
                    </select>
                </div>
            ) : (
                <span></span>
            )}
        </div>
    )
}

export default Options

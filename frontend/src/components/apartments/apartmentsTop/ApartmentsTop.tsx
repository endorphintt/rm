import { useEffect, useState } from 'react'
import c from './ApartmentsTop.module.scss'
import axios from 'axios'
import { useMyContext } from '../../../context/Context'
import CustomSelect from '../../customSelect/CustomSelect'

interface Props {
    title: string
    fetchData: (
        appointmentId?: number,
        typeId?: number,
        citiesId?: number
    ) => void
}

interface Filter {
    id: number
    namePL: string
    nameEN: string
}

const ApartmentsTop: React.FC<Props> = ({ title, fetchData }) => {
    const [appointment, setAppointment] = useState<Filter[] | null>(null)
    const [type, setType] = useState<Filter[] | null>(null)
    const [city, setCity] = useState<Filter[] | null>(null)
    const { data } = useMyContext()

    const [selectedType, setSelectedType] = useState<number | ''>('')
    const [selectedCity, setSelectedCity] = useState<number | ''>('')
    const [selectedAppointment, setSelectedAppointment] = useState<number | ''>(
        ''
    )

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

            setSelectedAppointment(appointmentsResponseData[0].id)
            setSelectedType(typesResponseData[0].id)
            setSelectedCity(citiesResponseData[0].id)
        } catch (error: any) {
            console.log(error)
        }
    }

    const handleTypeChange = (event: any) => {
        setSelectedType(event)
    }

    const handleAppointmentChange = (event: any) => {
        setSelectedAppointment(event)
    }

    const handleCityChange = (event: any) => {
        setSelectedCity(event)
    }

    useEffect(() => {
        fetchFormData()
    }, [])

    return (
        <section className={c.pagesTop}>
            <h2 className={c.pagesTop__title}>{title}</h2>
            <div className={c.filter_container}>
                {city && appointment && type ? (
                    <div className={c.filter}>
                        <div className={c.filter__items}>
                            <div className={c.filter__top}>
                                <div className={c.filter__top_item}>
                                    <CustomSelect
                                        data={data}
                                        options={type}
                                        onSelect={handleTypeChange}
                                    />
                                </div>
                                <div className={c.filter__top_item}>
                                    <CustomSelect
                                        data={data}
                                        options={appointment}
                                        onSelect={handleAppointmentChange}
                                    />
                                </div>
                            </div>
                            <div className={c.filter__bottom}>
                                <CustomSelect
                                    data={data}
                                    options={city}
                                    onSelect={handleCityChange}
                                />
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                if (
                                    selectedType &&
                                    selectedCity &&
                                    selectedAppointment
                                ) {
                                    fetchData(
                                        selectedAppointment,
                                        selectedType,
                                        selectedCity
                                    )
                                }
                            }}
                            className={c.filter__button}
                        >
                            {data === 'pl' ? 'Wyszukaj' : 'Filter'}
                        </button>
                    </div>
                ) : (
                    <span></span>
                )}
            </div>
        </section>
    )
}

export default ApartmentsTop

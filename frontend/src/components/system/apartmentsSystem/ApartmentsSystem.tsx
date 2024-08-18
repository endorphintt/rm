import c from '../System.module.scss'
import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { Apartment } from '../../apartments/Apartments'
import Options from './Options'

interface Props {
    deleteItem: (url: string, id: number) => Promise<void>
}

interface ApartmentData {
    namePL: string
    nameEN: string
    price: string
    images: FileList | null
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

const ApartmentsSystem: React.FC<Props> = ({ deleteItem }) => {
    // const [road, setRoad] = useState<string>('')
    // const roads = ['post', 'delete']
    // const [data, setData] = useState<Apartment[] | null>(null)

    // async function fetchData(): Promise<any> {
    //     try {
    //         const response: AxiosResponse = await axios.get(
    //             process.env.REACT_APP_API_URL + 'api/apartments/'
    //         )
    //         setData(response.data)
    //     } catch (error) {
    //         // Обробка помилок, наприклад, можна вивести їх або обробити іншим чином
    //         console.error('Error fetching data:', error)
    //         throw error
    //     }
    // }

    // const [formData, setFormData] = useState({
    //     namePL: '',
    //     nameEN: '',
    //     price: '',
    //     images: null as FileList | null,
    //     map: '',
    //     descriptionPL: '',
    //     descriptionEN: '',
    //     square: '',
    //     rooms: '',
    //     floor: '',
    //     czynsz: '',
    //     stan: '',
    //     balkon: '',
    //     parking: '',
    //     heating: '',
    //     address: '',
    // })
    // const [selectedType, setSelectedType] = useState<number | ''>('')
    // const [selectedCity, setSelectedCity] = useState<number | ''>('')
    // const [selectedAppointment, setSelectedAppointment] = useState<number | ''>(
    //     ''
    // )
    // const handleTypeChange = (event: any) => {
    //     setSelectedType(event.target.value)
    // }

    // const handleAppointmentChange = (event: any) => {
    //     setSelectedAppointment(event.target.value)
    // }

    // const handleCityChange = (event: any) => {
    //     setSelectedCity(event.target.value)
    // }

    // const handleImageChange = (
    //     e: React.ChangeEvent<HTMLInputElement>
    // ): void => {
    //     if (e.target.files) {
    //         setFormData({
    //             ...formData,
    //             images: e.target.files,
    //         })
    //     }
    // }

    // const handleInputChange = (
    //     e: React.ChangeEvent<
    //         HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    //     >
    // ) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value,
    //     })
    // }

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault()

    //     const apiUrl = process.env.REACT_APP_API_URL + 'api/apartments/'

    //     const formDataToSend = new FormData()
    //     formDataToSend.append('namePL', formData.namePL)
    //     formDataToSend.append('nameEN', formData.nameEN)
    //     formDataToSend.append('price', formData.price)
    //     if (formData.images) {
    //         for (let i = 0; i < formData.images.length; i++) {
    //             formDataToSend.append('images', formData.images[i])
    //         }
    //     }
    //     formDataToSend.append('citiesId', selectedCity.toString())
    //     formDataToSend.append('typeId', selectedType.toString())
    //     formDataToSend.append('appointmentId', selectedAppointment.toString())
    //     formDataToSend.append('map', formData.map)
    //     formDataToSend.append('descriptionPL', formData.descriptionPL)
    //     formDataToSend.append('descriptionEN', formData.descriptionEN)
    //     formDataToSend.append('square', formData.square)
    //     formDataToSend.append('rooms', formData.rooms)
    //     formDataToSend.append('floor', formData.floor)
    //     formDataToSend.append('czynsz', formData.czynsz)
    //     formDataToSend.append('stan', formData.stan)
    //     formDataToSend.append('balkon', formData.balkon)
    //     formDataToSend.append('parking', formData.parking)
    //     formDataToSend.append('heating', formData.heating)
    //     formDataToSend.append('address', formData.address)

    //     try {
    //         const response = await fetch(apiUrl, {
    //             method: 'POST',
    //             body: formDataToSend,
    //         })
    //         console.log(formDataToSend)
    //         if (response.ok) {
    //             alert('Data successfully sent!')
    //         } else {
    //             console.error('Failed to send data:', response.statusText)
    //         }
    //     } catch (error) {
    //         console.error('Error during fetch:', error)
    //     }
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])
    return (
        <div className={c.apartments__container}>
            {/* <nav className={c.header}>
                {roads.map((item) => (
                    <button
                        className={c.header__button}
                        key={item}
                        style={{
                            backgroundColor:
                                road === item
                                    ? 'rgba(255, 255, 255, 0.3)'
                                    : 'transparent',
                        }}
                        onClick={() => setRoad(item)}
                    >
                        {item}
                    </button>
                ))}
            </nav>
            <div className={c.body}>
                {road === 'delete' && data ? (
                    <div className={c.detete__container}>
                        {data.map((item) => (
                            <div className={c.delete__item} key={item.id}>
                                <p className={c.delete__title}>{item.namePL}</p>
                                <button
                                    onClick={() =>
                                        deleteItem('api/apartments/', item.id)
                                    }
                                    className={c.delete__button}
                                >
                                    delete
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <form className={c.system__form} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="namePL"
                            placeholder="Name (PL)"
                            value={formData.namePL}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="nameEN"
                            placeholder="Name (EN)"
                            value={formData.nameEN}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="price"
                            placeholder="Price"
                            value={formData.price}
                            onChange={handleInputChange}
                        />
                        <input
                            type="file"
                            name="image"
                            multiple
                            onChange={handleImageChange}
                        />

                        <textarea
                            name="descriptionPL"
                            placeholder="Description (PL)"
                            value={formData.descriptionPL}
                            onChange={handleInputChange}
                        />

                        <textarea
                            name="descriptionEN"
                            placeholder="Description (EN)"
                            value={formData.descriptionEN}
                            onChange={handleInputChange}
                        />

                        <input
                            type="text"
                            name="square"
                            placeholder="Square"
                            value={formData.square}
                            onChange={handleInputChange}
                        />

                        <input
                            type="text"
                            name="rooms"
                            placeholder="Rooms"
                            value={formData.rooms}
                            onChange={handleInputChange}
                        />

                        <input
                            type="text"
                            name="floor"
                            placeholder="Floor"
                            value={formData.floor}
                            onChange={handleInputChange}
                        />

                        <input
                            type="text"
                            name="czynsz"
                            placeholder="Czynsz"
                            value={formData.czynsz}
                            onChange={handleInputChange}
                        />

                        <input
                            type="text"
                            name="stan"
                            placeholder="Stan"
                            value={formData.stan}
                            onChange={handleInputChange}
                        />

                        <input
                            type="text"
                            name="balkon"
                            placeholder="Balkon"
                            value={formData.balkon}
                            onChange={handleInputChange}
                        />

                        <input
                            type="text"
                            name="parking"
                            placeholder="Parking"
                            value={formData.parking}
                            onChange={handleInputChange}
                        />

                        <input
                            type="text"
                            name="heating"
                            placeholder="Heating"
                            value={formData.heating}
                            onChange={handleInputChange}
                        />

                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                        <Options
                            handleCityChange={handleCityChange}
                            handleAppointmentChange={handleAppointmentChange}
                            handleTypeChange={handleTypeChange}
                            selectedType={selectedType}
                            selectedCity={selectedCity}
                            selectedAppointment={selectedAppointment}
                        />
                        <button type="submit">Submit</button>
                    </form>
                )}
            </div> */}
        </div>
    )
}

export default ApartmentsSystem

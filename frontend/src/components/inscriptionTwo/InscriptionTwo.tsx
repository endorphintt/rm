import c from './IncriptionTwo.module.scss'
import { useMyContext } from '../../context/Context'

const InscriptionTwo = () => {
    const { data } = useMyContext()
    return (
        <article className={c.container}>
            <div className={c.inscription}>
                {data === 'pl' ? (
                    <p className={c.text}>darmowa konsultacja</p>
                ) : (
                    <p className={c.text}>free consultation</p>
                )}
                <div className={c.contact_container}>
                    <img
                        className={c.contact}
                        src="./img/contact.png"
                        alt="realsy contact"
                    />
                    <div className={c.circle}></div>
                    <div className={`${c.circle} ${c.second}`}></div>
                </div>
            </div>
        </article>
    )
}

export default InscriptionTwo

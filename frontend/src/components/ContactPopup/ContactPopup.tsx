import { ValidationError, useForm } from '@formspree/react'
import { useMyContext } from '../../context/Context'
import c from './ContactPopup.module.scss'
import FormSuccess from '../contact/formSuccess/FormSuccess'
import { useEffect, useState } from 'react'

const ContactPopup = () => {
    const { data } = useMyContext()
    const [state, handleSubmit] = useForm('xqkorkjl')
    const [display, setDisplay] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setDisplay(true)
        }, 40000)
    }, [])

    if (state.succeeded) {
        return (
            <FormSuccess
                textPL="Dziękujemy za skontaktowanie się z naszą firmą, nasz konsultant skontaktuje się z Państwem w najbliższym czasie roboczym."
                textEN="Thank you for contacting our company, our consultant will get in touch with you during the next business hours."
            />
        )
    }
    return (
        <article
            className={c.popup}
            style={{ display: display ? 'flex' : 'none' }}
        >
            <div className={c.popup__header}>
                <button
                    onClick={() => setDisplay(false)}
                    className={c.popup__close}
                ></button>
            </div>
            <div className={c.popup__body}>
                <div className={c.poput__text}>
                    <h3 className={c.popup__title}>
                        {data === 'pl'
                            ? 'Bezpłatna konsultacja'
                            : 'Free consultation'}
                    </h3>
                    <p className={c.popup__description}>
                        {data === 'pl'
                            ? 'Zostaw swój numer, oddzwonimy i odpowiemy na wszystkie twoje pytania!'
                            : "Leave your number, we'll call you back and answer all your questions!"}
                    </p>
                </div>
                <form className={c.form} onSubmit={handleSubmit}>
                    <div className={c.form__item}>
                        <input
                            type="name"
                            id="name"
                            name="name"
                            placeholder="Kamil Matuszewski"
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                    </div>
                    <div className={c.form__item}>
                        <input
                            id="phone"
                            type="phone number"
                            name="phone"
                            placeholder="phone number (+...)"
                        />
                        <ValidationError
                            prefix="Phone"
                            field="phone"
                            errors={state.errors}
                        />
                    </div>
                    <button
                        type="submit"
                        className={c.form__button}
                        disabled={state.submitting}
                    >
                        {data === 'pl' ? 'wyślij' : 'send'}
                    </button>
                </form>
            </div>
            <span></span>
        </article>
    )
}

export default ContactPopup

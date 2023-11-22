import { useMyContext } from '../../context/Context'
import c from './Contact.module.scss'
import { useForm, ValidationError } from '@formspree/react'
import FormSuccess from './formSuccess/FormSuccess'

const Contact = () => {
    const { data } = useMyContext()
    const [state, handleSubmit] = useForm('mknledql')
    if (state.succeeded) {
        return (
            <FormSuccess
                textPL="Dziękujemy za skontaktowanie się z naszą firmą, nasz konsultant skontaktuje się z Państwem w najbliższym czasie roboczym."
                textEN="Thank you for contacting our company, our consultant will get in touch with you during the next business hours."
            />
        )
    }
    return (
        <article className={c.contact}>
            <h2 className={c.contact__title}>
                {data === 'pl' ? 'kontakt' : 'contact'}
            </h2>
            <div className={c.contact__body}>
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
                            id="email"
                            type="email"
                            name="email"
                            placeholder="kamil@gmail.com"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
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
                    <div className={c.form__item}>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="question"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button
                        type="submit"
                        className={c.form__button}
                        disabled={state.submitting}
                    >
                        {data === 'pl' ? 'WYślij' : 'send'}
                    </button>
                </form>
                <div className={c.info}>
                    <h2 className={c.info__inscription}>
                        {data === 'pl'
                            ? 'Zawsze jesteśmy otwarci do kontaktu. zadzwoń lub zamów rozmowę!'
                            : 'We are always open to contact. Call or schedule a conversation!'}
                    </h2>
                    <div className={c.info__items}>
                        <div className={c.info__item}>
                            <img src="./img/call.png" alt="number" />
                            <p>+ 48 573 408 404</p>
                        </div>
                        <div className={c.info__item}>
                            <img src="./img/call.png" alt="number" />
                            <p>+ 48 573 408 585</p>
                        </div>
                        <div className={c.info__item}>
                            <img src="./img/mail.png" alt="number" />
                            <p>biuro@realsymanagement.pl</p>
                        </div>
                        <div className={c.info__item}>
                            <img src="./img/location.svg" alt="address" />
                            <p>Wrocław, ul. Biskupia 11/202, 50-149</p>
                        </div>
                        <div className={c.info__item}>
                            <img src="./img/doc.svg" alt="number" />
                            <p>NIP: 8971928387</p>
                        </div>
                        <div className={c.info__item}>
                            <img src="./img/doc.svg" alt="number" />
                            <p>KRS: 0001062684</p>
                        </div>
                        <div className={c.info__item}>
                            <img src="./img/doc.svg" alt="number" />
                            <p>REGON: 526654935</p>
                        </div>
                    </div>
                    <div className={c.info__social}>
                        <button className={c.info__social_item}>
                            <img src="./img/ins_gray.png" alt="fb" />
                        </button>
                        <button className={c.info__social_item}>
                            <img src="./img/fb_gray.png" alt="fb" />
                        </button>
                        <button className={c.info__social_item}>
                            <img src="./img/link_gray.png" alt="fb" />
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Contact

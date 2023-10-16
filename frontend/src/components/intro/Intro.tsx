import c from './Intro.module.scss'

const Intro: React.FC = () => {
    return (
        <article className={c.intro__container}>
            <div className={c.intro}>
                <img
                    className={c.intro__img}
                    src="./img/rmColumns.png"
                    alt="realsy management"
                />
                <div className={c.intro__text}>
                    <h1 className={c.intro__title}>
                        Realsy <br />
                        Management
                    </h1>
                    <h2 className={c.intro__subtitle}>
                        Unlocking Property Potential
                    </h2>
                    <div className={c.rectangle}></div>
                </div>
            </div>
        </article>
    )
}

export default Intro

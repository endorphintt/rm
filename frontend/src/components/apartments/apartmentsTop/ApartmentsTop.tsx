import c from './ApartmentsTop.module.scss'

interface Props {
    title: string
}

const ApartmentsTop: React.FC<Props> = ({ title }) => {
    return (
        <section className={c.pagesTop}>
            <h2 className={c.pagesTop__title}>{title}</h2>
        </section>
    )
}

export default ApartmentsTop

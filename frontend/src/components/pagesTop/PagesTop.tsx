import c from './PagesTop.module.scss'

interface Props {
    title: string
}

const PagesTop: React.FC<Props> = ({ title }) => {
    return (
        <section className={c.pagesTop}>
            <h2 className={c.pagesTop__title}>{title}</h2>
        </section>
    )
}

export default PagesTop

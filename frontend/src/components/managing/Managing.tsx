import c from './Managing.module.scss'
import { useMyContext } from '../../context/Context'
import BranchButton from '../branchButton/branchButton'
import { HOME_ROUTE, OFFERS_ROUTE } from '../../variables/variables'

const Managing: React.FC = () => {
    const { data } = useMyContext()

    const tabletData = [
        {
            circleName: '3100',
            PLtext: 'Zarobki klienta z wynajmu',
            ENtext: 'Rental income for the client.',
        },
        {
            circleName: '4160',
            PLtext: 'Zarządzanie najmem hybrydowym',
            ENtext: 'Hybrid rental management.',
        },
        {
            circleName: '134%',
            PLtext: 'wydajność',
            ENtext: 'performance',
        },
    ]
    return (
        <article className={c.managing}>
            <div className={c.title}>
                {data === 'pl'
                    ? 'zarządzanie najmem hybrydowym'
                    : 'hybrid lease management'}
            </div>
            <div className={c.content}>
                <div className={c.text}>
                    {data === 'en' ? (
                        <p className={c.description}>
                            Our team of experts understands the benefits and
                            challenges of hybrid leasing. We help clients
                            optimize their investments in this area, ensuring
                            maximum return on investment.
                        </p>
                    ) : (
                        <p className={c.description}>
                            Nasz zespół ekspertów doskonale rozumie korzyści i
                            wyzwania związane z najmem hybrydowym. Pomagamy
                            klientom zoptymalizować swoje inwestycje w tej
                            dziedzinie, zapewniając maksymalny zwrot z
                            inwestycji.
                        </p>
                    )}
                    <ul className={c.list}>
                        <li className={c.list__item}>
                            {data === 'pl' ? 'Wygoda' : 'Convenience'}
                        </li>
                        <li className={c.list__item}>
                            {data === 'pl'
                                ? 'Zawodowa wiedza'
                                : 'Professional Expertise'}
                        </li>
                        <li className={c.list__item}>
                            {data === 'pl'
                                ? 'Oszczędność czasu'
                                : 'Time Savings'}
                        </li>
                        <li className={c.list__item}>
                            {data === 'pl'
                                ? 'Wiedza o rynku'
                                : 'Market Knowledge'}
                        </li>
                        <li className={c.list__item}>
                            {data === 'pl'
                                ? 'Ochrona prawna'
                                : 'Legal Protection'}
                        </li>
                    </ul>
                </div>
                <div className={c.tablet}>
                    <div className={c.tablet__header}>
                        <img
                            className={c.logo}
                            src="./img/logo_white_small.png"
                            alt="realsy management logo"
                        />
                        <p className={c.apart}>apartment 40m</p>
                    </div>
                    <div className={c.tablet__content}>
                        {tabletData.map((item) => (
                            <div className={c.tablet__item}>
                                <div className={c.tablet__circle_container}>
                                    <div className={c.tablet__circle}>
                                        {item.circleName}
                                    </div>
                                </div>
                                <p className={c.tablet__description}>
                                    {data === 'pl' ? item.PLtext : item.ENtext}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <BranchButton
                data={data}
                PLname="więcej"
                ENname="more"
                link={OFFERS_ROUTE}
            />
        </article>
    )
}

export default Managing

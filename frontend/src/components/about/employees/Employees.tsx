import c from './Employees.module.scss'

const employees = [
    {
        name: 'Igor Sobotnyk',
        number: '+48573408585',
        position: 'Co-founder',
        img: './img/aaa_igor.png',
    },
    {
        name: 'Dmytro Selin',
        number: '+48573408404',
        position: 'Co-founder',
        img: './img/aaa_dima.png',
    },
]

const Employees = () => {
    return (
        <div className={c.container}>
            <div className={c.employees}>
                {employees.map((e) => (
                    <div className={c.employees__item}>
                        <img
                            src={e.img}
                            alt="employee"
                            className={c.employees__img}
                        />
                        <p className={c.employees__name}>{e.name}</p>
                        <p className={c.employees__position}>{e.position}</p>
                        <a
                            className={c.employees__number}
                            href={'tel:' + e.number}
                        >
                            {e.number}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Employees

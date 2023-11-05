import { useState } from 'react'
import { useMyContext } from '../../context/Context'
import c from './OffersScroll.module.scss'
import BranchButton from '../branchButton/branchButton'
import { HOME_ROUTE, OFFERS_ROUTE } from '../../variables/variables'

interface slide {
    namePL: string
    nameEN: string
    position: number
    img: string
    icon: string
}

const OffersScroll: React.FC = () => {
    const [currentSlide, setSlide] = useState<number>(1)
    const { data } = useMyContext()
    console.log(currentSlide)

    const position = (currentSlide - 1) * 100 * -1

    const handleSlide = (direction: string) => {
        if (direction === 'right' && currentSlide < 3) {
            setSlide(currentSlide + 1)
        } else if (direction === 'left' && currentSlide > 1) {
            setSlide(currentSlide - 1)
        }
    }

    const slides: slide[] = [
        {
            namePL: 'pośrednictwo najmu',
            nameEN: 'rental brokerage',
            position: 1,
            img: './offersBackground.png',
            icon: './img/lupa.png',
        },
        {
            namePL: 'pośrednictwo zakupu',
            nameEN: 'buing brokerage',
            position: 2,
            img: './offersBackground.png',
            icon: './img/lupa.png',
        },
        {
            namePL: 'zarzadzanie',
            nameEN: 'managing',
            position: 3,
            img: './offersBackground.png',
            icon: './img/lupa.png',
        },
    ]

    return (
        <article className={c.offersScroll}>
            <p className={c.offersScroll__title}>
                {data === 'pl' ? 'OFERTA' : 'OFFERS'}
            </p>
            <div className={c.offersScroll__line_container}>
                <div
                    className={c.offersScroll__line}
                    style={{
                        transform: `translate(${position}%)`,
                    }}
                >
                    {slides.map((slide) => (
                        <div
                            className={c.offersScroll__item}
                            style={{
                                transform: `scale(${
                                    currentSlide === slide.position ? 1 : 0.8
                                })`,
                                opacity:
                                    currentSlide === slide.position ? 1 : 0.6,
                            }}
                        >
                            <div className={c.offersScroll__icon_container}>
                                <img
                                    className={c.offersScroll__icon}
                                    src={slide.icon}
                                    alt={slide.nameEN}
                                />
                            </div>
                            <div className={c.item__cart_container}>
                                <div className={c.item__cart}>
                                    <p className={c.item__cart_text}>
                                        {data === 'pl'
                                            ? slide.namePL
                                            : slide.nameEN}
                                    </p>
                                </div>
                            </div>
                            <div className={c.offersScroll__details}>
                                <BranchButton
                                    PLname="szczegóły"
                                    ENname="details"
                                    link={OFFERS_ROUTE}
                                    data={data}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className={`${c.offersScroll__button} ${c.left}`}
                    onClick={() => handleSlide('left')}
                    style={{
                        display: currentSlide === 1 ? 'none' : 'block',
                    }}
                >
                    <span></span>
                </button>
                <button
                    style={{
                        display: currentSlide === 3 ? 'none' : 'block',
                    }}
                    className={`${c.offersScroll__button} ${c.right}`}
                    onClick={() => handleSlide('right')}
                >
                    <span></span>
                </button>
            </div>
        </article>
    )
}

export default OffersScroll

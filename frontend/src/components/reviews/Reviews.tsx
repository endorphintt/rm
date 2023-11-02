import { useEffect, useRef, useState } from 'react'
import c from './Reviews.module.scss'
import { useMyContext } from '../../context/Context'
import ReviewsPop from './ReviewsPop'

interface Slide {
    name: string
    stars: number
    text: string
}

const reviews = [
    {
        name: 'Katarzyna Dołkowska',
        stars: 5,
        text: 'Polecam od całego serca, Dmytro pomógł nam ze sprzedażą mieszkania, proces zajął niecały miesiąc i cena transakcyjna była wyższa, niż cena ofertowa!',
    },
    {
        name: 'Katarzyna Dołkowska',
        stars: 4.5,
        text: 'Polecam od całego serca, Dmytro pomógł nam ze sprzedażą mieszkania, proces zajął niecały miesiąc i cena transakcyjna była wyższa, niż cena ofertowa!',
    },
    {
        name: 'Katarzyna Dołkowska',
        stars: 4.5,
        text: 'Polecam od całego serca, Dmytro pomógł nam ze sprzedażą mieszkania, proces zajął niecały miesiąc i cena transakcyjna była wyższa, niż cena ofertowa!',
    },
    {
        name: 'Katarzyna Dołkowska',
        stars: 4.5,
        text: 'Polecam od całego serca, Dmytro pomógł nam ze sprzedażą mieszkania, proces zajął niecały miesiąc i cena transakcyjna była wyższa, niż cena ofertowa!',
    },
    {
        name: 'Katarzyna Dołkowska',
        stars: 4.5,
        text: 'Polecam od całego serca, Dmytro pomógł nam ze sprzedażą mieszkania, proces zajął niecały miesiąc i cena transakcyjna była wyższa, niż cena ofertowa!',
    },
    {
        name: 'Katarzyna Dołkowska',
        stars: 4.5,
        text: 'Polecam od całego serca, Dmytro pomógł nam ze sprzedażą mieszkania, proces zajął niecały miesiąc i cena transakcyjna była wyższa, niż cena ofertowa!',
    },
    {
        name: 'Katarzyna Dołkowska',
        stars: 4.5,
        text: 'Polecam od całego serca, Dmytro pomógł nam ze sprzedażą mieszkania, proces zajął niecały miesiąc i cena transakcyjna była wyższa, niż cena ofertowa!',
    },
    {
        name: 'Katarzyna Dołkowska',
        stars: 4.5,
        text: 'Polecam od całego serca, Dmytro pomógł nam ze sprzedażą mieszkania, proces zajął niecały miesiąc i cena transakcyjna była wyższa, niż cena ofertowa!',
    },
]

const Reviews = () => {
    const { data } = useMyContext()
    const [currentPosition, setPosition] = useState<number>(0)
    const blockRef = useRef<HTMLDivElement | null>(null)
    const [blockWidth, setBlockWidth] = useState<number | null>(null)
    const [popup, setPopup] = useState<Slide>(reviews[0])
    const [popupDisplay, setPopupDisplay] = useState<boolean>(false)

    const showPopup = (slide: Slide) => {
        setPopup(slide)
        setPopupDisplay(true)
    }

    const updateBlockWidth = () => {
        if (blockRef.current) {
            const newBlockWidth = blockRef.current.offsetWidth
            setBlockWidth(newBlockWidth)
        }
    }

    const changeSlide = (side: string) => {
        if (side === 'right' && blockWidth) {
            if (currentPosition + 240 < reviews.length * 240 - blockWidth) {
                setPosition(currentPosition + 240)
            } else {
                setPosition(reviews.length * 240 - blockWidth)
            }
        } else if (side === 'left' && blockWidth) {
            if (currentPosition - 240 > 0) {
                setPosition(currentPosition - 240)
            } else {
                setPosition(0)
            }
        }
    }

    useEffect(() => {
        updateBlockWidth()
        window.addEventListener('resize', updateBlockWidth)

        return () => {
            window.removeEventListener('resize', updateBlockWidth)
        }
    }, [])

    return (
        <article className={c.reviews_container}>
            <div className={c.reviews}>
                <div
                    ref={blockRef}
                    className={c.reviews__line}
                    style={{ transform: `translateX(-${currentPosition}px)` }}
                >
                    {reviews.map((slide) => (
                        <div className={c.slide}>
                            <div className={c.slide__header}>
                                <p className={c.slide__name}>{slide.name}</p>
                                <div
                                    className={c.slide__stars}
                                    style={{
                                        width: `${(40 / 5) * slide.stars}%`,
                                    }}
                                >
                                    <img src="./img/star.png" />
                                    <img src="./img/star.png" />
                                    <img src="./img/star.png" />
                                    <img src="./img/star.png" />
                                    <img src="./img/star.png" />
                                </div>
                            </div>
                            <div className={c.slide__text}>
                                <p>{slide.text}</p>
                            </div>
                            <div
                                onClick={() => showPopup(slide)}
                                className={c.slide__button}
                            >
                                {data === 'pl'
                                    ? 'Czytaj cały tekst'
                                    : 'read all text'}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                className={`${c.button} ${c.left}`}
                onClick={() => changeSlide('left')}
                style={{
                    display: currentPosition === 0 ? 'none' : 'block',
                }}
            >
                <span></span>
            </button>
            <button
                style={{
                    display:
                        currentPosition ===
                        reviews.length * 240 - (blockWidth || 0)
                            ? 'none'
                            : 'block',
                }}
                className={`${c.button} ${c.right}`}
                onClick={() => changeSlide('right')}
            >
                <span></span>
            </button>
            <ReviewsPop
                slide={popup}
                setPopupDisplay={() => setPopupDisplay(false)}
                popupDisplay={popupDisplay}
            />
        </article>
    )
}

export default Reviews

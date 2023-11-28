import { useEffect, useRef, useState } from 'react'
import c from './Reviews.module.scss'
import { useMyContext } from '../../context/Context'
import ReviewsPop from './ReviewsPop'
import axios from 'axios'
import { spawn } from 'child_process'

interface Slide {
    name: string
    stars: number
    text: string
}

const Reviews = () => {
    // fetch data
    const [ReviewData, setReviewData] = useState<Slide[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)
    const fetchData = async () => {
        try {
            const url: string =
                process.env.REACT_APP_API_URL + 'api/reviews' || ''
            const response = await axios.get(url)
            const responseData = response.data
            setReviewData(responseData)
            setLoading(false)
        } catch (error: any) {
            setError(error)
            setLoading(false)
        }
    }

    const { data } = useMyContext()
    const [currentPosition, setPosition] = useState<number>(0)
    const blockRef = useRef<HTMLDivElement | null>(null)
    const [blockWidth, setBlockWidth] = useState<number | null>(null)
    const [popup, setPopup] = useState<Slide>({ name: '', stars: 5, text: '' })
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
        if (side === 'right' && blockWidth && ReviewData) {
            if (currentPosition + 240 < ReviewData.length * 240 - blockWidth) {
                setPosition(currentPosition + 240)
            } else {
                setPosition(ReviewData.length * 240 - blockWidth)
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
        fetchData()

        return () => {
            window.removeEventListener('resize', updateBlockWidth)
        }
    }, [])

    return (
        <div>
            {loading ? (
                <span></span>
            ) : ReviewData ? (
                <article className={c.reviews_container}>
                    <div className={c.reviews}>
                        <div
                            ref={blockRef}
                            className={c.reviews__line}
                            style={{
                                transform: `translateX(-${currentPosition}px)`,
                            }}
                        >
                            {ReviewData.map((slide) => (
                                <div key={slide.name} className={c.slide}>
                                    <div className={c.slide__header}>
                                        <p className={c.slide__name}>
                                            {slide.name}
                                        </p>
                                        <div
                                            className={c.slide__stars}
                                            style={{
                                                width: `${
                                                    (40 / 5) * slide.stars
                                                }%`,
                                            }}
                                        >
                                            <img src="/img/star.png" />
                                            <img src="/img/star.png" />
                                            <img src="/img/star.png" />
                                            <img src="/img/star.png" />
                                            <img src="/img/star.png" />
                                        </div>
                                    </div>
                                    <div className={c.slide__text}>
                                        <p>{slide.text}</p>
                                    </div>
                                    <button
                                        onClick={() => showPopup(slide)}
                                        className={c.slide__button}
                                    >
                                        {data === 'pl'
                                            ? 'Czytaj cały tekst'
                                            : 'read all text'}
                                    </button>
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
                                ReviewData.length * 240 - (blockWidth || 0)
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
            ) : (
                <span></span>
            )}
        </div>
    )
}

export default Reviews

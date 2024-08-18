import c from './Reviews.module.scss'

interface Props {
    slide: {
        name: string
        stars: number
        text: string
    }
    setPopupDisplay: () => void
    popupDisplay: boolean
}

const ReviewsPop: React.FC<Props> = ({
    slide,
    popupDisplay,
    setPopupDisplay,
}) => {
    return (
        <div
            className={c.popup}
            style={{
                display: popupDisplay ? 'flex' : 'none',
            }}
        >
            <div className={c.popup__header}>
                <p className={c.popup__name}>{slide.name}</p>
                <button
                    onClick={setPopupDisplay}
                    className={c.popup__close}
                ></button>
            </div>
            <div
                className={c.popup__stars}
                style={{
                    width: `${(78 / 5) * slide.stars}px`,
                }}
            >
                <img src="/img/star.png" />
                <img src="/img/star.png" />
                <img src="/img/star.png" />
                <img src="/img/star.png" />
                <img src="/img/star.png" />
            </div>
            <p className={c.popup__text}>{slide.text}</p>
        </div>
    )
}

export default ReviewsPop

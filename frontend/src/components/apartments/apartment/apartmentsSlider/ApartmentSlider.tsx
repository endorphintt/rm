import { useState } from 'react'
import c from './ApartmentSlider.module.scss'

interface Props {
    images: string
}

const ApartmentSlider: React.FC<Props> = ({ images }) => {
    const [position, setPosition] = useState<number>(0)

    const changeSlide = (side: boolean) => {
        if (side && splitByComma(images).length * 100 - 100 > position) {
            setPosition(position + 100)
        } else if (!side && position > 0) {
            setPosition(position - 100)
        }
    }

    function splitByComma(input: string): string[] {
        return input.split(',')
    }
    return (
        <div className={c.container}>
            <div
                className={c.line}
                style={{
                    transform: `translateX(${-position}vw)`,
                }}
            >
                {splitByComma(images).map((slide) => (
                    <div key={slide} className={c.slide}>
                        <img
                            className={c.slide__img}
                            src={process.env.REACT_APP_API_URL + '/' + slide}
                            alt="realsy management offers"
                        />
                    </div>
                ))}
            </div>
            <button
                style={{
                    opacity: position === 0 ? '0.3' : '1',
                }}
                onClick={() => changeSlide(false)}
                className={`${c.button} ${c.left}`}
            ></button>
            <button
                style={{
                    opacity:
                        position === splitByComma(images).length * 100 - 100
                            ? '0.3'
                            : '1',
                }}
                onClick={() => changeSlide(true)}
                className={`${c.button} ${c.right}`}
            ></button>
        </div>
    )
}

export default ApartmentSlider

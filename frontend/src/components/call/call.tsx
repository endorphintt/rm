import c from './Call.module.scss'

const Call = () => {
    const handleCall = () => {
        const numbers = ['+ 48573408404', '+48573408585']
        const randomIndex = Math.floor(Math.random() * numbers.length)
        window.location.href = `tel:${numbers[randomIndex]}`
    }

    return (
        <button className={c.call} onClick={handleCall}>
            <img className={c.call__img} src="./img/call2.png" alt="call" />
        </button>
    )
}

export default Call

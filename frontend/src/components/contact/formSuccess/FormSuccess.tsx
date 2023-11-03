import { useMyContext } from '../../../context/Context'
import c from './FormSuccess.module.scss'

interface Props {
    textPL: string
    textEN: string
}

const FormSuccess: React.FC<Props> = ({ textPL, textEN }) => {
    const handleReload = () => {
        window.location.reload()
    }
    const { data } = useMyContext()
    return (
        <div className={c.body}>
            <p className={c.text}>{data === 'pl' ? textPL : textEN}</p>
            <button className={c.successButton} onClick={handleReload}>
                {data === 'pl' ? 'Strona domowa' : 'home page'}
            </button>
        </div>
    )
}

export default FormSuccess

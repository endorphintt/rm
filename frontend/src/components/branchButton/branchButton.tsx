import c from './branchButton.module.scss'
import { useNavigate } from 'react-router-dom'

interface Props {
    data: string
    PLname: string
    ENname: string
    link: string
}

const BranchButton: React.FC<Props> = ({ data, PLname, ENname, link }) => {
    const nav = useNavigate()
    return (
        <button className={c.button} onClick={() => nav('/' + link)}>
            {data === 'pl' ? PLname : ENname}
        </button>
    )
}

export default BranchButton

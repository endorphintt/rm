import { useMyContext } from '../../context/Context'
import { HOME_ROUTE } from '../../variables/variables'
import BranchButton from '../branchButton/branchButton'
import c from './Blog.module.scss'

const Blog = () => {
    const { data } = useMyContext()
    return (
        <div className={c.blog}>
            <p className={c.blog__title}>
                {data === 'pl'
                    ? 'Blog w trakcie realizacji'
                    : 'Blog under construction'}
            </p>
            <BranchButton
                data={data}
                PLname="Głowna"
                ENname="Home"
                link={HOME_ROUTE}
            />
        </div>
    )
}

export default Blog

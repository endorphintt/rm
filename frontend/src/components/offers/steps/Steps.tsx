import { text } from 'stream/consumers'
import c from './Steps.module.scss'

type Props = {
    items:
        | {
              id: number
              text: string
              title: string
          }[]
        | undefined
}

const Steps: React.FC<Props> = ({ items }) => {
    return (
        <section className={c.steps}>
            {items ? (
                items.map((item) => (
                    <div key={item.id} className={c.item}>
                        <h2 className={c.item__title}>
                            {item.id}. {item.title}
                        </h2>
                        <p className={c.item__text}>{item.text}</p>
                    </div>
                ))
            ) : (
                <p>Список порожній або невизначений.</p>
            )}
        </section>
    )
}

export default Steps

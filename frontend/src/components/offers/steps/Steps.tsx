import { text } from 'stream/consumers'
import c from './Steps.module.scss'
import { useState } from 'react'

type Props = {
    readMore: boolean
    items:
        | {
              id: number
              text: string
              title: string
          }[]
        | undefined
    data: string
}

const Steps: React.FC<Props> = ({ readMore, items, data }) => {
    return (
        <section
            className={c.steps}
            style={{ height: !readMore ? '800px' : 'auto' }}
        >
            {items ? (
                items.map((item) => (
                    <div className={c.item}>
                        <div className={c.item__number}>{item.id}</div>
                        <div className={c.item__border}>
                            <span></span>
                        </div>
                        <div key={item.id} className={c.item__info}>
                            <h2 className={c.item__title}>{item.title}</h2>
                            <p className={c.item__text}>{item.text}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Список порожній або невизначений.</p>
            )}
        </section>
    )
}

export default Steps

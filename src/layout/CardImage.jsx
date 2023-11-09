import React from 'react'
import styles from './_CardImage.module.scss'

function CardImage({title, numberCard, owner}) {
  return (
    <div className={styles.cardImage}>
        <h1>{title}</h1>

        <div className={styles.details}>
            <span className={styles.numberCard}>{numberCard}</span>
            <span className={styles.owner}>{owner}</span>
        </div>
    </div>
  )
}

export default CardImage
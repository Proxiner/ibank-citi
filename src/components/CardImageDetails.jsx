import React from 'react'
import styles from '../layout/_CardImage.module.scss'

function CardImageDetails({ title, numberCard, owner }) {
    return (
        <>
            <h1>{title}</h1>

            <div className={styles.details}>
                <span className={styles.numberCard}>{numberCard}</span>
                <span className={styles.owner}>{owner}</span>
            </div>
        </>
    )
}

export default CardImageDetails
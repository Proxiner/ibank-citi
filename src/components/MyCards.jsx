import React from 'react'
import styles from './MyCards.module.scss'
import Deposit from './Deposit'

function MyCards() {
    return (
        <div className={styles.myCards}>
            <h1></h1>
            <Deposit />
        </div>
    )
}

export default MyCards
import React from 'react'
import styles from './MyCards.module.scss'
import MoneySuggestions from './MoneySuggestions'

function Deposit() {
    return (
        <div className={styles.deposit} >
            <div className={styles.suggestions}>
                <MoneySuggestions suggestion={'200,000'} />
                <MoneySuggestions suggestion={'200,000'} />
                <MoneySuggestions suggestion={'200,000'} />
                <MoneySuggestions suggestion={'200,000'} />
                <MoneySuggestions suggestion={'200,000'} />
                <MoneySuggestions suggestion={'200,000'} />
                <MoneySuggestions suggestion={'100,000,000'} />
                <button className={styles.btn}>...</button>
            </div>

        </div>
    )
}

export default Deposit
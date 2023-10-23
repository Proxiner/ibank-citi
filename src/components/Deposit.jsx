import React from 'react'
import styles from './Deposit.module.scss'
import MoneySuggestions from './MoneySuggestions'

function Deposit() {
    return (
        <div className={styles.deposit} >
              <section className={styles.inputPart}>
<input type="text" placeholder="100000" className={styles.depositInput}/>
<button className={styles.depositButton}>Deposit</button>

</section>
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
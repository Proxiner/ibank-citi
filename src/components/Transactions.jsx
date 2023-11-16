import React from 'react'
import styles from './Transactions.module.scss'


function Transactions() {
  return (
    <div className={styles.heading}>
        <h1 className={styles.title}>Transactions</h1>
        <h5 className={styles.subtitle}>(recent)</h5>
    </div>
  )
}

export default Transactions
import React from 'react'
import styles from './Transactions.module.scss'
import dribbble from '../assets/dribble.svg'


function Transactions() {
  return (
    <div className={styles.heading}>

        <h1 className={styles.title}>Transactions</h1>
        <h5 className={styles.subtitle}>(recent)</h5>

        <div className={styles.card}>
          <div className={styles.IconDrop}>
            <img src={dribbble} alt="" />
            </div>
          <span>Dribbble</span>
        </div>


    </div>
  )
}

export default Transactions
import React from 'react'
import Navigation from '../assets/navigation.svg'
import styles from "./Transfer.module.scss"
import Tejarat from "../assets/Tejarat-Bank-logo.svg"
import Sepah from "../assets/bank-sepah.svg"

function QuickTransfer() {
  return (
    <>

      <div className={styles.quickTransferBox}>
        <h1 className={styles.Title}>Quick Money Transfer</h1>
        <div className={styles.cardBox}>
          <img src={Tejarat} alt="its just an SUS logo is n't this weird?" className={styles.Tejarat} />
          <span>5859 ***** ***** 2245</span>
          <img src={Navigation} alt="its just a button LOL" className={styles.slider} />
        </div>

        <div className={styles.cardBox}>
          <img src={Sepah} alt="its just a button LOL" className={styles.slider} />
          <span>5859 ***** ***** 2245</span>
          <span className={styles.userName}>Mohammad</span>
        </div>
        <button type='button' className={styles.confirmBtn}>Confirm Trasnfer</button>
      </div>

    </>
  )
}

export default QuickTransfer

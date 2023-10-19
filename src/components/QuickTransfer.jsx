import React from 'react'
import styles from "./Transfer.module.scss"
import CreditCardNumber from './CreditCardNumber'
import Sepah from '../assets/bank-sepah.svg'

function QuickTransfer() {
  return (
    <>

      <div className={styles.quickTransferBox}>
        <h1 className={styles.Title}>Quick Money Transfer</h1>
        <CreditCardNumber creditCardNumber={"5859 **** **** 2245"} />
        <div className={styles.cardBox}>
          <img src={Sepah} alt="its just a image, Isn't it weird?" className={styles.slider} />
          <span>5859 ***** ***** 2245</span>
          <span className={styles.userName}>Mohammad</span>
        </div>
        <div className={styles.cardBox}>
          <span className={styles.captchaTitle}>300,000 
            <span>(IR)</span>
          </span>
          <span className={styles.captchaImg}>Im not a robot</span>
        </div>
        <button type='button' className={styles.confirmBtn}>Confirm Trasnfer</button>
      </div>

    </>
  )
}

export default QuickTransfer
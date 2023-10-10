import React from 'react'
import styles from "./Transfer.module.scss"
import CreditCardNumber from './CreditCardNumber'

function QuickTransfer({ creditCardNumber }) {
  return (
    <>

      <div className={styles.quickTransferBox}>
        <h1 className={styles.Title}>Quick Money Transfer</h1>
<CreditCardNumber  creditCardNumber={"5859 **** **** 2245"} />
        <button type='button' className={styles.confirmBtn}>Confirm Trasnfer</button>
      </div>

    </>
  )
}

export default QuickTransfer

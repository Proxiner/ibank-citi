import React from 'react'
import styles from "./_Transfer.module.scss"

function CreditCardNumber({ creditCardNumber, imageSrc }) {
  return (
    <>
      <div className={styles.cardBox}>
        <img src={imageSrc} alt="Tejarat Icon" className={styles.Tejarat} />
        <span>{creditCardNumber}</span>
      </div>
    </>
  )
}

export default CreditCardNumber

import React from 'react'
import styles from "./_Transfer.module.scss"

function CreditCardNumber({ creditCardNumber, imageSrc }) {
  return (
    <>
      <div className={styles.cardBox}>
<<<<<<< HEAD
        <img src={imageSrc} alt="Tejarat Icon" className={styles.Tejarat} />
        <span>{creditCardNumber}</span>
=======

        <img src={imageSrc} alt="Tejarat Icon" className={styles.Tejarat} />
        <span>{creditCardNumber}</span>

>>>>>>> 4e8f2b969d306c7ac24399237e2f5b46de838483
      </div>
    </>
  )
}

export default CreditCardNumber

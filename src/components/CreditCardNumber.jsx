import React, { useContext } from 'react'
import styles from "./_Transfer.module.scss"
import { addCart } from '../pages/Home';

function CreditCardNumber({ creditCardNumber, imageSrc }) {
  const { darkMode } = useContext(addCart);
  return (
    <>
      <div className={`${styles.cardBox} ${darkMode ? '_Transfer_darkMode__nqWR5' : ''}`}>
        <img src={imageSrc} alt="Tejarat Icon" className={styles.Tejarat} />
        <span className={`${darkMode ? '_Transfer_darkMode__nqWR5' : ''}`}>{creditCardNumber}</span>
      </div>
    </>
  )
}

export default CreditCardNumber

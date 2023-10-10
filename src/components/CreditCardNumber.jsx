import React from 'react'
import Navigation from '../assets/navigation.svg'
import styles from "./Transfer.module.scss"
import Tejarat from "../assets/Tejarat-Bank-logo.svg"

function CreditCardNumber({creditCardNumber}) {
  return (
    <>
              <div className={styles.cardBox}>
          <img src={Tejarat} alt="its just an SUS logo is n't this weird?" className={styles.Tejarat} />
          <span>{creditCardNumber}</span>
          <img src={Navigation} alt="its just a button LOL" className={styles.slider} />
        </div>
    </>
  )
}

export default CreditCardNumber

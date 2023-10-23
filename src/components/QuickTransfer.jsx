import React, { useRef } from 'react'
import styles from "./Transfer.module.scss"
import CreditCardNumber from './CreditCardNumber'
import Sepah from '../assets/bank-sepah.svg'

import GoogleRecaptcha from 'react-google-recaptcha';

function QuickTransfer() {

  const recaptchaRef = useRef();

  const handleSubmit = () => {
    recaptchaRef.current.getValue();
  }

  return (
    <>

      <div className={styles.quickTransferBox}>
        <h1 className={styles.Title}>Quick Money Transfer</h1>
        <CreditCardNumber creditCardNumber={"5859 **** **** 2245"} />
        <div className={styles.cardBox}>
          <img src={Sepah} alt="its just , Isn't it weird?" className={styles.slider} />
          <span>5859 ***** ***** 2245</span>
          <span className={styles.userName}>Mohammad</span>
        </div>
        <div className={styles.cardBox}>
          <span className={styles.captchaTitle}>300,000
            <span>(IR)</span>
          </span>
            <form onSubmit={handleSubmit}  className={styles.captchaImg}>
              <GoogleRecaptcha
                ref={recaptchaRef}
                sitekey="6LeQL8MoAAAAAD-m3yV7XsaRk6LamTg6ENg0jA1O"
              />
              <button type="submit">Submit</button>
            </form>
        </div>
        <button type='button' className={styles.confirmBtn}>Confirm Trasnfer</button>
      </div>

    </>
  )
}

export default QuickTransfer
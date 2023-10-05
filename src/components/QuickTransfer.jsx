import React from 'react'
import Navigation from '../assets/navigation.svg'
import styles from "./Transfer.module.scss"

function QuickTransfer() {
  return (
    <>

      <div className={styles.quickTransferBox}> 
     <h1 className={styles.Slider}>Quick Money Transfer</h1>
       <div className={styles.cardBox}>
        <img src={Navigation} alt="its just a button LOL" className={styles.slider}/>
        <span>5859 ***** ***** 2245</span>
        </div> 
      </div>

    </>
  )
}

export default QuickTransfer

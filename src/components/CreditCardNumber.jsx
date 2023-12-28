import React from 'react'
import styles from "./_Transfer.module.scss"

function CreditCardNumber({ creditCardNumber, imageSrc }) {
  return (
    <>
      <div className={styles.cardBox}>
        <svg className={styles.arrowLeft} id="vuesax_outline_arrow-circle-right" data-name="vuesax/outline/arrow-circle-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g id="arrow-circle-right">
            <path id="Vector" d="M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z" transform="translate(1.25 1.25)" fill="#e8e8e8" />
            <path id="Vector-2" data-name="Vector" d="M.747,8.558a.742.742,0,0,1-.53-.22.754.754,0,0,1,0-1.06l3-3-3-3A.75.75,0,0,1,1.278.218l3.53,3.53a.754.754,0,0,1,0,1.06l-3.53,3.53A.742.742,0,0,1,.747,8.558Z" transform="translate(9.992 7.723)" fill="#626262" />
            <path id="Vector-3" data-name="Vector" d="M0,0H24V24H0Z" fill="none" opacity="0" />
          </g>
        </svg>

        <img src={imageSrc} alt="Tejarat Icon" className={styles.Tejarat} />
        <span>{creditCardNumber}</span>
        
        <svg id="vuesax_outline_arrow-circle-right" data-name="vuesax/outline/arrow-circle-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g id="arrow-circle-right">
            <path id="Vector" d="M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z" transform="translate(1.25 1.25)" fill="#e8e8e8" />
            <path id="Vector-2" data-name="Vector" d="M.747,8.558a.742.742,0,0,1-.53-.22.754.754,0,0,1,0-1.06l3-3-3-3A.75.75,0,0,1,1.278.218l3.53,3.53a.754.754,0,0,1,0,1.06l-3.53,3.53A.742.742,0,0,1,.747,8.558Z" transform="translate(9.992 7.723)" fill="#626262" />
            <path id="Vector-3" data-name="Vector" d="M0,0H24V24H0Z" fill="none" opacity="0" />
          </g>
        </svg>
      </div>
    </>
  )
}

export default CreditCardNumber

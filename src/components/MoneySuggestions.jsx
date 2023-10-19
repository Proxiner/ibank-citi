import React from 'react'
import styles from './Deposit.module.scss'

function MoneySuggestions({suggestion}) {
  return (
    <span className={styles.moneySuggestions}>{suggestion}</span>
  )
}

export default MoneySuggestions
import React from 'react'
import styles from "./_MyCards.module.scss"
function ChangerBtn({icon, title}) {
    return (
        <button className={styles.changerBtn}>
            <span>
                {icon}
            </span>
            <span>{title}</span>
        </button>
    )
}

export default ChangerBtn
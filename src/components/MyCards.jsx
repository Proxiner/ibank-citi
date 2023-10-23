import React from 'react'
import styles from './MyCards.module.scss'
import Deposit from './Deposit'
import CreditCardNumber from './CreditCardNumber'
import ChangerBtn from './ChangerBtn'

function MyCards() {
    return (
        <div className={styles.myCards}>
            <h1 className={styles.title}>My Cards</h1>
            <CreditCardNumber creditCardNumber={"5859 **** **** 2245"} />
            <div className={styles.availableBalance}>
                <span>Available Balance   </span>
                <ChangerBtn
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="18.705" height="18.705" viewBox="0 0 18.705 18.705"><path d="M1.783,14.1a1.786,1.786,0,0,1-1.239-.468,1.856,1.856,0,0,1-.53-1.582L.3,9.527A2.81,2.81,0,0,1,.98,8.077L7.379,1.3c1.6-1.691,3.266-1.738,4.957-.14s1.738,3.266.14,4.957l-6.4,6.773a2.809,2.809,0,0,1-1.411.756l-2.51.429C2.025,14.086,1.908,14.1,1.783,14.1Zm8.1-12.945a2.381,2.381,0,0,0-1.652.935L1.83,8.872a1.8,1.8,0,0,0-.366.779l-.288,2.525a.685.685,0,0,0,.171.6.7.7,0,0,0,.608.14l2.51-.429a1.741,1.741,0,0,0,.756-.405l6.4-6.773c.966-1.029,1.317-1.98-.094-3.3A2.464,2.464,0,0,0,9.881,1.156Z" transform="translate(2.534 1.112)" fill="#a69ffc"/><path d="M4.823,5.181H4.768A5.346,5.346,0,0,1,.006.677.594.594,0,0,1,.5.006.594.594,0,0,1,1.168.5,4.187,4.187,0,0,0,4.893,4.02a.585.585,0,0,1,.522.639A.6.6,0,0,1,4.823,5.181Z" transform="translate(8.691 3.353)" fill="#a69ffc"/><path d="M14.613,1.169H.585A.589.589,0,0,1,0,.585.589.589,0,0,1,.585,0H14.613A.589.589,0,0,1,15.2.585.589.589,0,0,1,14.613,1.169Z" transform="translate(1.754 16.562)" fill="#a69ffc"/><path d="M0,0H18.7V18.7H0Z" fill="none" opacity="0"/></svg>}
                    title={'Edit Card'} />
            </div>
            <div className={styles.money}>
                <span>$6.293.20 (IR)</span>
                <ChangerBtn
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="18.705" height="18.705" viewBox="0 0 18.705 18.705"><path d="M9.547,1.169H.585A.589.589,0,0,1,0,.585.589.589,0,0,1,.585,0H9.547a.589.589,0,0,1,.585.585A.589.589,0,0,1,9.547,1.169Z" transform="translate(0.974 6.04)" fill="#a69ffc"/><path d="M2.143,1.169H.585A.589.589,0,0,1,0,.585.589.589,0,0,1,.585,0H2.143a.589.589,0,0,1,.585.585A.589.589,0,0,1,2.143,1.169Z" transform="translate(4.092 12.275)" fill="#a69ffc"/><path d="M3.7,1.169H.585A.589.589,0,0,1,0,.585.589.589,0,0,1,.585,0H3.7a.589.589,0,0,1,.585.585A.589.589,0,0,1,3.7,1.169Z" transform="translate(7.599 12.275)" fill="#a69ffc"/><path d="M12.712,14.418H4.045C.943,14.418,0,13.483,0,10.412V4.006C0,.935.943,0,4.045,0h5.5a.589.589,0,0,1,.585.585.589.589,0,0,1-.585.585h-5.5c-2.447,0-2.876.421-2.876,2.837v6.4c0,2.416.429,2.837,2.876,2.837H12.7c2.447,0,2.876-.421,2.876-2.837V7.225a.585.585,0,1,1,1.169,0V10.4C16.756,13.483,15.813,14.418,12.712,14.418Z" transform="translate(0.974 2.143)" fill="#a69ffc"/><path d="M4.871,1.169H.585A.589.589,0,0,1,0,.585.589.589,0,0,1,.585,0H4.871a.589.589,0,0,1,.585.585A.589.589,0,0,1,4.871,1.169Z" transform="translate(12.275 4.287)" fill="#a69ffc"/><path d="M.585,5.456A.589.589,0,0,1,0,4.871V.585A.589.589,0,0,1,.585,0a.589.589,0,0,1,.585.585V4.871A.589.589,0,0,1,.585,5.456Z" transform="translate(14.418 2.143)" fill="#a69ffc"/><path d="M0,0H18.7V18.7H0Z" fill="none" opacity="0"/></svg>  }
                    title={'Edit Card'} />
            </div>
            <Deposit />
        </div>
    )
}

export default MyCards
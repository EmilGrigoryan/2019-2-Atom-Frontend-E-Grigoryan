import React from 'react'

import styles from '../styles/Message.module.css'

export function MessageOne(props) {
  return (
    <div className={`${styles.messageOne} ${styles.newmessage}`}>
      <div className={styles.userName}>EG</div>
      <div className={styles.time}>{props.time}</div>
      <div className={styles.data}>{props.data}</div>
    </div>
  )
}

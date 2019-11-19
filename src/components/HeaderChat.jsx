import React from 'react'

import styles from '../styles/HeaderChat.module.css'

export function HeaderChat(props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.burger}></div>
      <div className={styles.data}>Chat</div>
      <div className={styles.search}></div>
    </div>
  )
}

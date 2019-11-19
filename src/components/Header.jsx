import React from 'react'

import styles from '../styles/Header.module.css'

export function Header(props) {
  return (
    <div className={styles.wrap}>
      <div onClick={props.closeChat.bind(this)} className={styles.backbutton}></div>
      <div className={styles.data}>
        <div className={styles.name}> {props.name} </div>
        <div className={styles.online}>last seen recently</div>
      </div>
      <div className={styles.search}></div>
    </div>
  )
}

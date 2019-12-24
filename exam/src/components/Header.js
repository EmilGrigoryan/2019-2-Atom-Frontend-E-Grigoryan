import React from 'react'

import styles from '../styles/Header.module.css'

export function Header(props) {
    return (
      <div className={styles.wrap}>
        <div className={styles.backbutton}></div>
        <div className={styles.data}>Weather</div>
        <div className={styles.search}></div>
      </div>
    )
  }
  
import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Header.module.css'

export function Header(props) {
  return (
    <div className={styles.wrap}>
      <Link to="/">
        <div className={styles.backbutton}></div>
      </Link>
      <div className={styles.data}>
        <Link to={`/profile/`} style={{ textDecoration: 'none', color: 'unset' }}>
          <div className={styles.name}> {props.name} </div>
        </Link>
        <div className={styles.online}>{props.status}</div>
      </div>
      <div className={styles.search}></div>
    </div>
  )
}

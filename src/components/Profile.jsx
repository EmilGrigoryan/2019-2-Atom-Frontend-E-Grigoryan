import React from 'react'
import styles from '../styles/Profile.module.css'
import { Header } from './Header'

export function Profile(props) {
  const { style } = props
  return (
    <div className={styles.wrap} style={style}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.profile}>
        <div className={styles.avatar} />
        <div className={styles.container}>
          <p>Full name</p>
          <p>Emil</p>
        </div>
        <div className={styles.container}>
          <p>Username:</p>
          <p>emil__grig</p>
        </div>
        <div className={styles.container}>
          <p>About:</p>
          <p>Разработчик приложения</p>
        </div>
      </div>
    </div>
  )
}

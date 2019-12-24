import React from 'react'

import styles from '../styles/Location.module.css'

export function Location(props) {
  return (
      <div className={styles.locationName}></div>
      <div className={styles.country}></div>
      <div className={styles.degree}></div>
        <div className={styles.PersonalInformation}>
          <div className={styles.name}>
            <p>{props.chat.name}</p>
          </div>
          <div className={styles.lastmessage}>
            <p>{props.chat.data}</p>
          </div>
        </div>
        <div className={styles.AdditionalInformation}>
          <div className={styles.time}>
            <p>{props.chat.time}</p>
          </div>
          <div className={styles.status}></div>
        </div>
      </div>
  )
}
import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/DialogObject.module.css'

export function DialogObject(props) {
  return (
    <div className={styles.wrap}>
      <Link to={`/profile/`} style={{ textDecoration: 'none', color: 'unset' }}>
        <div className={styles.avatar}></div>
      </Link>
      <Link
        to={`/chat/${props.chat_id}`}
        className={styles.InformationBlock}
        style={{ textDecoration: 'none', color: 'unset' }}
      >
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
      </Link>
    </div>
  )
}

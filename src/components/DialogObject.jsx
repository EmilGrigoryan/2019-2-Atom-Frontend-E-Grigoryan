import React from 'react'

import styles from '../styles/DialogObject.module.css'

export function DialogObject(props) {
  return (
    <div onClick={props.openChat.bind(undefined, props.id)} className={styles.wrap}>
      <div className={styles.avatar}></div>
      <div className={styles.InformationBlock}>
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
    </div>
  )
}

import React from 'react'

import { Dialogs } from './Dialogs'

import styles from '../styles/ChatStyle.module.css'

export function ChatForm() {
  return (
    <div className={styles.wrap}>
      <Dialogs />
    </div>
  )
}

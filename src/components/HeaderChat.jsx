import React from 'react'

import styles from '../styles/HeaderChat.module.css'

export class HeaderChat extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.burger}></div>
        <div className={styles.data}>Chat</div>
        <div className={styles.search}></div>
      </div>
    )
  }
}

import React from 'react'
import './Initialization'
import { Dialogs } from './Dialogs'
import styles from '../styles/ChatStyle.module.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
export function ChatForm() {
  return (
    <Router>
      <div className={styles.wrap}>
        <Route path="/" component={Dialogs} />
      </div>
    </Router>
  )
}

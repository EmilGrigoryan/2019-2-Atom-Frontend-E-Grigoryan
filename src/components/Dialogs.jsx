import React from 'react'

import styles from '../styles/Dialogs.module.css'

import { HeaderChat } from './HeaderChat'
import { DialogObject } from './DialogObject'
import { MessageForm } from './MessageForm'

export class Dialogs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dialogID: null,
      openMessages: null,
      name: '',
      MessageFormAppear: {
        animationName: styles.disappear,
      },
    }
    this.openChat = this.openChat.bind(this)
    this.closeChat = this.closeChat.bind(this)
  }

  openChat(dialogId) {
    const { state } = this
    state.MessageFormAppearance = {
      animationName: styles.appear,
    }
    const buffer = JSON.parse(localStorage.getItem(`DialogId_${dialogId}`))
    state.openMessages = buffer[1]
    state.dialogID = dialogId
    state.name = buffer[0].name
    this.setState(state)
  }

  closeChat() {
    const { state } = this
    state.MessageFormAppearance = {
      animationName: styles.disappear,
    }
    this.setState(state)
  }

  dialogLoad() {
    let dialogs = []
    const messageArray = JSON.parse(localStorage.getItem('DialogIDs'))
    if (messageArray) {
      messageArray.forEach((item) => {
        const chat = JSON.parse(localStorage.getItem(`DialogId_${item}`))
        const dialogueItem = (
          <DialogObject id={item} chat={chat[0]} key={Date.now() + Math.random()} openChat={this.openChat} />
        )
        dialogs.push(dialogueItem)
      })
      return dialogs
    }
    localStorage.setItem('DialogIDs', JSON.stringify([]))
    return []
  }

  render() {
    const dialogBuffer = this.dialogLoad()
    return (
      <div className={styles.wrap}>
        <div className={styles.header}>
          <HeaderChat />
        </div>
        <div className={styles.dialogs}>{dialogBuffer}</div>
        <div className={styles.buttonNew}></div>
        <MessageForm
          style={this.state.MessageFormAppearance}
          key={Date.now() + Math.random()}
          messages={this.state.openMessages}
          closeChat={this.closeChat}
          id={this.state.dialogID}
          name={this.state.name}
        />
      </div>
    )
  }
}

import React from 'react'

import styles from '../styles/Dialogs.module.css'

import { HeaderChat } from './HeaderChat'
import { DialogObject } from './DialogObject'
import { MessageForm } from './MessageForm'
import { Profile } from './Profile'

export class Dialogs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dialogID: null,
      openMessages: null,
      name: '',
      MessageFormAppear: {
        animationName: null,
      },
      ProfileAppear: {
        animationName: null,
      },
    }
    this.openChat = this.openChat.bind(this)
    this.closeChat = this.closeChat.bind(this)
  }

  openChat(dialogId) {
    const { state } = this
    state.MessageFormAppear = {
      animationName: styles.appear,
    }
    const buffer = JSON.parse(localStorage.getItem(`DialogId_${dialogId}`))
    state.openMessages = buffer[1]
    state.dialogID = dialogId
    state.name = buffer[0].name
  }

  closeChat() {
    const { state } = this
    state.MessageFormAppear = {
      animationName: styles.disappear,
    }
    console.log('state.MessageFormAppear')
  }

  openProfile() {
    const { state } = this
    state.ProfileAppear = {
      animationName: styles.appear,
    }
    console.log(state.ProfileAppear)
  }

  closeProfile() {
    const { state } = this
    state.ProfileAppear = {
      animationName: styles.disappear,
    }
  }

  dialogLoad() {
    let dialogs = []
    const messageArray = JSON.parse(localStorage.getItem('DialogIDs'))
    if (messageArray) {
      messageArray.forEach((item) => {
        const chat = JSON.parse(localStorage.getItem(`DialogId_${item}`))
        const dialogueItem = (
          <DialogObject
            id={item}
            chat_id={item}
            chat={chat[0]}
            key={Date.now() + Math.random()}
            openChat={this.openChat}
          />
        )
        dialogs.push(dialogueItem)
      })
      return dialogs
    }
    localStorage.setItem('DialogIDs', JSON.stringify([]))
    return []
  }

  funcRouter() {
    const path = this.props.location.pathname
    switch (true) {
      case /chat\/\d\/?$/.test(path):
        const chatId = parseInt(path.match(/\d+/), 10)
        this.openChat(chatId)
        break
      case /profile/.test(path):
        this.openProfile()
        break
      default:
        this.closeChat()
        this.closeProfile()
        break
    }
  }

  render() {
    this.funcRouter()
    const dialogBuffer = this.dialogLoad()
    return (
      <div className={styles.wrap}>
        <div className={styles.header}>
          <HeaderChat />
        </div>
        <div className={styles.dialogs}>{dialogBuffer}</div>
        <div className={styles.buttonNew}></div>
        <MessageForm
          style={this.state.MessageFormAppear}
          key={Date.now() + Math.random()}
          messages={this.state.openMessages}
          closeChat={this.closeChat}
          id={this.state.dialogID}
          name={this.state.name}
        />
        <Profile style={this.state.ProfileAppear} />
      </div>
    )
  }
}

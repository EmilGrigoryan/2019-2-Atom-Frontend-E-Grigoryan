import React from 'react'
import styles from '../styles/MessageForm.module.css'
import { Header } from './Header'
import { FormInput } from './FormInput'
import { MessageOne } from './Message'

export class MessageForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dialogId: this.props.id,
      messages: this.messagesRender(),
    }
  }

  getTimeStr() {
    const time = new Date()
    return `${time.getHours()}:${time.getMinutes()}`
  }

  handleSubmit(value) {
    const { state } = this
    if (value.length > 0) {
      const timeMes = this.getTimeStr()
      const key = `DialogId_${this.state.dialogId}`
      state.messages.push(<MessageOne key={Date.now() + Math.random()} data={value} time={timeMes} />)
      const messageObj = {
        name: 'EG',
        data: value,
        time: timeMes,
      }
      const messageBuf = JSON.parse(localStorage.getItem(key))
      messageBuf[0].data = value
      messageBuf[0].time = timeMes
      messageBuf[1].push(messageObj)
      localStorage.setItem(key, JSON.stringify(messageBuf))
    }
    this.setState(state)
  }

  messagesRender() {
    const messageOne = []
    if (this.props.id !== null) {
      const messages = this.props.messages
      messages.forEach((item) => {
        const dialogueItem = <MessageOne data={item.data} time={item.time} key={Date.now() + Math.random()} />
        messageOne.push(dialogueItem)
      })
    }
    return messageOne
  }

  render() {
    return (
      <div style={this.props.style} className={styles.wrap}>
        <div className={styles.header}>
          <Header name={this.props.name} status={'last seen recently'} />
        </div>
        <div className={styles.dialog}>
          <div className={styles.messages}>{this.state.messages}</div>
        </div>
        <div className={styles.formInput}>
          <FormInput handleSubmit={this.handleSubmit.bind(this)} />
        </div>
      </div>
    )
  }
}

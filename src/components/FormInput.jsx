import React from 'react'

import styles from '../styles/FormInput.module.css'

export class FormInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.handleSubmit(this.state.value)
    this.setState({ value: '' })
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.pin}></div>
        <form onSubmit={this.handleSubmit.bind(this)} style={{ width: '100%' }}>
          <input
            type="text"
            value={this.state.value}
            placeholder="Write a message.."
            onChange={this.handleChange.bind(this)}
            style={{ outline: 'none' }}
          />
        </form>
      </div>
    )
  }
}

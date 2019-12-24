import React from 'react'
import {Header} from './Header'
import styles from '../styles/Weather.module.css'

export class Weather extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <div className={styles.wrap}>
            <div className={styles.header}>
            <Header />
            </div>
            <div className={styles.location}>{}</div>
            <div className={styles.buttonNew}></div>
        </div>
        )
    }
  }
  
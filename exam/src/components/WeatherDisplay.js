import React from 'react';
import styles from '../styles/WeatherDisplay.module.css'
// import {Weather} from './Weather'
import {Weather} from './Weather'
export class WeatherDisplay extends React.Component {
  render() {
    return (
    <div className={styles.wrap}>
        <Weather />
    </div>
    );
  }
}



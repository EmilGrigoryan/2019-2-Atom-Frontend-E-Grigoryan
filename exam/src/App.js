import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { WeatherDisplay } from './WeatherDisplay';

function App() {
  return (
    <WeatherDisplay />
  );
}



export default App;
class WeatherDisplay extends React.Component {
  render() {
    return (
      <h1>Displaying some Weather!</h1>
    );
  }
}


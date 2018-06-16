import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css'

const WeatherWrapper = styled.section `
  width: 380px;
  height: 580px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0px 8px 32px rgba(0,0,0,.05);
  background: white;
`
const InputCity = styled.input `
  width: 340px;
  margin: 0 auto;
  display: block;
  border-radius: 8px;
  background: rgba(0,0,0,.15);
  padding: 8px;
  border: none;
  font-size: 14px;
  color: white;
  &::placeholder {
    color: rgba(255,255,255,.5)
  }
`
const WeatherBackground = styled.section`
  width: 380px;
  height: 320px;
  padding-top: 14px;
  margin: 0 auto;
  border-radius: 8px 8px 0 0;
  background: ${
    props => props.morning ? 'linear-gradient(to top, #ff5f6d, #ffc371)'
    : props.afternoon ? 'linear-gradient(to top, #36d1dc, #5b86e5)' 
    : props.evening ? 'linear-gradient(to top, #2980b9, #2c3e50)'
    : 'teal'
  };
`
const LocationTitle = styled.h4 `
  padding: 20px;
  margin: 0;
  color: white;
  text-shadow: 0 2px 4px rgba(0,0,0,.1);
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 14px;
  opacity: .9;
  text-align: center;
  font-weight: 900;
`
const WeatherInfo = styled.h1 `
  padding: 0 20px;
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,.1);
  margin: 0;
  text-align: center;
`
const TempText = styled.h1 `
  padding: 0 0 30px 0;
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,.1);
  font-weight: bolder;
  font-size: 120px;
  margin: 0;
  text-align: center;
  position: relative;
  span {
    position: absolute
  }
`
const WeatherForecastWrapper = styled.ul `
  list-style: none;
  text-align: center;
  padding: 0;
`
const WeatherForecastItem = styled.li `
  display: inline-block;
  padding: 0 20px;
  border-right: thin solid #f5f5f5;
  &:last-child {
    border: none;
  }
`
const WeatherItemIcon = styled.div `
  width: 80px;
  height: 80px;
  background: #f5f5f5;
  border-radius: 50%;
`

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <WeatherWrapper>
          <WeatherBackground morning>
            <InputCity placeholder="Enter city name" />
            <LocationTitle>
              Jakarta
            </LocationTitle>
            <TempText>
              23<span>&deg;</span>
            </TempText>
            <WeatherInfo>
              Party Cloudy
            </WeatherInfo>
          </WeatherBackground>
          <WeatherForecastWrapper>
            <WeatherForecastItem>
              <h4>Tue</h4>
              <WeatherItemIcon></WeatherItemIcon>
              <h2>20&deg;</h2>
            </WeatherForecastItem>
            <WeatherForecastItem>
              <h4>Wed</h4>
              <WeatherItemIcon></WeatherItemIcon>
              <h2>19&deg;</h2>
            </WeatherForecastItem>
            <WeatherForecastItem>
              <h4>Thu</h4>
              <WeatherItemIcon></WeatherItemIcon>
              <h2>23&deg;</h2>
            </WeatherForecastItem>
          </WeatherForecastWrapper>
        </WeatherWrapper>
      </div>
    );
  }
}

export default App;

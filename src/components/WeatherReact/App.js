import React, { Component } from 'react';
import styled from 'styled-components';
import WeatherIcon from 'react-icons-weather';
import './App.css';

const WeatherWrapper = styled.section `
  width: 380px;
  height: 600px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0px 8px 32px rgba(0,0,0,.1);
  background: white;
`
const InputCity = styled.input `
  width: 340px;
  margin: 0 auto;
  display: block;
  border-radius: 4px;
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
  height: 350px;
  padding-top: 14px;
  margin: 0 auto;
  border-radius: 8px 8px 0 0;
  clip-path: circle(95% at 50% 0);
  background: ${
    props => props.morning ? 'linear-gradient(to top, #ff5f6d, #ffc371)'
    : props.sunny ? 'linear-gradient(to top, #36d1dc, #5b86e5)' 
    : props.dark ? 'linear-gradient(to top, #2980b9, #2c3e50)'
    : 'teal'
  };
`
const LocationTitle = styled.h4 `
  padding: 20px 0 10px 0;
  margin: 0;
  color: white;
  text-shadow: 0 1px 1px rgba(0,0,0,.1);
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 16px;
  opacity: .9;
  text-align: center;
  font-weight: 900;
`
const WeatherInfo = styled.h1 `
  padding: 0 20px;
  color: white;
  text-shadow: 0 1px 1px rgba(0,0,0,.1);
  margin: 0;
  text-align: center;
`
const TempText = styled.h1 `
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  color: white;
  font-weight: bolder;
  font-size: 80px;
  margin: 0;
  text-align: center;
  display: inline-block;
  margin-left: 20px
`
const WeatherForecastWrapper = styled.ul `
  list-style: none;
  text-align: center;
  padding: 0;
  margin: 10px 0;
`
const WeatherForecastItem = styled.li `
  display: inline-block;
  padding: 0 20px;
  border-right: thin solid #f5f5f5;
  &:last-child {
    border: none;
  }
  h4 {
    color: #aaa;
    text-transform: uppercase;
    font-size: 14px;
    text-align: center;
    letter-spacing: 2px
  }
`
const WeatherItemIcon = styled.div `
  width: 80px;
  height: 80px;
  background: #f5f5f5;
  border-radius: 50%;
`
const WeatherMainIconWrapper = styled.div `
  width: 100%;
  font-size: 80px;
  text-align: center;
  padding: 60px 0 20px;
  color: white;
  opacity: .9
`

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <WeatherWrapper>
          <WeatherBackground sunny>
            <InputCity placeholder="Enter city name" />
            <WeatherMainIconWrapper>
              <WeatherIcon name="owm" iconId="602" />
              <TempText>
                21&deg;
              </TempText>
            </WeatherMainIconWrapper>
            <LocationTitle>
              Bandung, Indonesia
            </LocationTitle>
            <WeatherInfo>
              Partly Sunny
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
              <WeatherItemIcon>
                <WeatherIcon name="owm" iconId="602" />
              </WeatherItemIcon>
              <h2>23&deg;</h2>
            </WeatherForecastItem>
          </WeatherForecastWrapper>
        </WeatherWrapper>
      </div>
    );
  }
}

export default App;

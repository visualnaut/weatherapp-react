import React, { Component } from 'react';
import styled from 'styled-components';
import WeatherIcon from 'react-icons-weather';

const WeatherBackground = styled.section `
  width: 380px;
  height: 680px;
  padding-top: 14px;
  margin: 0 auto;
  border-radius: 8px 8px 0 0;
  clip-path: circle(95% at 50% 0);
  position: relative;
  background: ${
    props => props.time === "morning" ? 'linear-gradient(to top, #ff5f6d, #ffc371)'
    : props.time === "afternoon" ? 'linear-gradient(to top, #36d1dc, #5b86e5)' 
    : props.time === "evening" ? 'linear-gradient(to top, #2980b9, #2c3e50)'
    : 'tomato'
  };
`
const LocationTitle = styled.h4 `
  padding: 20px 0 10px 0;
  margin: 0;
  color: white;
  text-shadow: 0 1px 1px rgba(0,0,0,.1);
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 12px;
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
const WeatherMainIconWrapper = styled.div `
  width: 100%;
  font-size: 80px;
  text-align: center;
  padding: 190px 0 20px;
  color: white;
  opacity: .9
`

class WeatherViewer extends Component {
  render() { 
    return (
      <WeatherBackground time={this.props.time}>
        <WeatherMainIconWrapper>
          <WeatherIcon name="owm" iconId={this.props.icid} />
          <TempText>
            {this.props.temp}&deg;
          </TempText>
        </WeatherMainIconWrapper>
        <LocationTitle>
          {this.props.location}
        </LocationTitle>
        <WeatherInfo>
          {this.props.winfo}
        </WeatherInfo>
      </WeatherBackground>
    )
  }
}

export default WeatherViewer;
import React, { Component } from 'react'
import styled from 'styled-components'
import WeatherIcon from 'react-icons-weather'

const WeatherFItem = styled.li `
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
  h2 {
    font-family: 'Quicksand', sans-serif;
    opacity: .75
  }
`
const WeatherItemIcon = styled.div `
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 32px;
  text-align: center;
  line-height: 80px;
  color: white;
  background: linear-gradient(to bottom, #36d1dc, #5b86e5);
  box-shadow: 0 16px 32px rgba(91,134,229,.25);
  `
class WeatherForecastItem extends Component {
  render() { 
    return ( 
    <WeatherFItem>
      <h4>{this.props.day}</h4>
      <WeatherItemIcon>
        <WeatherIcon name="owm" iconId={this.props.icid} />
      </WeatherItemIcon>
      <h2>{this.props.temp}&deg;</h2>
    </WeatherFItem> 
    )
  }
}

export default WeatherForecastItem;
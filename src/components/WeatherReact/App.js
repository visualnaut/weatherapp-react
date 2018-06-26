import React, { Component } from 'react';
import styled from 'styled-components';
import WeatherViewer from '../WeatherViewer';
import LocationInput from '../WeatherViewer/LocationInput';
import axios from 'axios';
import './App.css';

const WeatherWrapper = styled.section `
  width: 380px;
  height: 600px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0px 8px 32px rgba(0,0,0,.1);
  background: white;
  position: relative
`
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      ip: '',
      latitude: '',
      longitude: '',
      data: '',
      temp: '~',
      location: 'Loading',
      wdesc: 'Please Wait',
      icid: "721",
      fcast: ''
    }
  }

  componentWillMount() {

    // Get location using window navigator geolocation
    let location = window.navigator && window.navigator.geolocation
    if (location) {
      location.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      }, (error) => {
        // If fail, get location based on IP address
        axios.get('https://ipinfo.io/json')
        .then(res => {
          let location = res.data.loc.split(',')
          this.setState({
            ip: res.ip,
            latitude: location[0],
            longitude: location[1]
          })
        })
        //Still error? bad luck
        .catch(error => {
          console.log(error);
        })
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // check previous state
    if (
      this.state.latitude !== '' &&
      this.state.longitude !== '' &&
      this.state.latitude !== undefined &&
      this.state.longitude !== undefined &&
      prevState.latitude !== this.state.latitude &&
      prevState.longitude !== this.state.longitude
    ) {
      axios({
        method: 'get',
        url: 'http://api.openweathermap.org/data/2.5/weather',
        params: {
          lat: this.state.latitude,
          lon: this.state.longitude,
          units: 'metric',
          type: 'accurate',
          appid: 'f54350a13f034d154042b786b8992594'
        }
      })
        .then(res => {
          this.setState({
            temp: Math.round(res.data.main.temp * 10) / 10,
            location: res.data.name + " , " + res.data.sys.country,
            wdesc: res.data.weather[0].main,
            icid:  res.data.weather[0].id.toString()
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
  
  handleChangeLocation(suggest) {
    if(suggest !== undefined){
      this.setState({
        latitude: suggest.location.lat,
        longitude: suggest.location.lng,
      })
    }
  }

  handleLabel() {
    if (this.state.location !== '' && this.state.location !== undefined) {
      return this.state.location
    } else {
      return `${this.state.data.location}`
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <WeatherWrapper>
          <LocationInput handleChangeLocation={this.handleChangeLocation.bind(this)} />
          <WeatherViewer
            temp={this.state.temp}
            icid={this.state.icid}
            location={this.state.location}
            winfo={this.state.wdesc} />
        </WeatherWrapper>
      </div>
    );
  }
}

export default App;

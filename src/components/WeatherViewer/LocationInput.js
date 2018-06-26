import React from 'react'
import Geosuggest from 'react-geosuggest';
import './geosuggest.css'

const LocationInput = ({ handleChangeLocation }) => (
  <Geosuggest placeholder="Enter City Name" 
              onSuggestSelect={(suggest) => handleChangeLocation(suggest)} />
);

export default LocationInput;
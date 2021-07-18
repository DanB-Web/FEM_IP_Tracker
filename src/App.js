import { useState } from 'react'
import { fetchAddress } from './utils/api.js'

import Header from './components/Header'
import Map from './components/Map'

import './App.scss'
import 'normalize.css'

function App() {

  const [locationSubmitted, setLocationSubmitted] = useState(false)
  const [location, setLocation] = useState({
    lat: 51.505,
    long: -0.09,
    ip: '000.000.000.000',
    address: 'London, UK',
    timezone: '+01:00',
    isp: 'O2'
  })
  
  const getNewLocation = async (ip) => {
    setLocationSubmitted(true)
    const apiCall = await fetchAddress(ip)
    setLocationSubmitted(false)
    setLocation({
      lat: apiCall.location.lat, 
      long: apiCall.location.lng,
      ip: apiCall.ip,
      address: `${apiCall.location.city}, ${apiCall.location.region}`,
      timezone: apiCall.location.timezone,
      isp: apiCall.isp
    })
  }

  return (
    <div className="App">
      <Header getNewLocation={getNewLocation} location={location} locationSubmitted={locationSubmitted}/>
      <Map location={location} locationSubmitted={locationSubmitted}/>
    </div>
  );
}

export default App;

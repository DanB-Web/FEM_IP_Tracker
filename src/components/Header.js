import { useState } from 'react'
import { SyncLoader } from 'react-spinners'
import '../styles/header.scss'
import { FaAngleRight } from 'react-icons/fa'


const Header = ({ getNewLocation, location, locationSubmitted }) => {

  const [inputState, setInputState] = useState('')

  const loaderGrey = 'hsl(0, 0%, 59%)'

  const newLocationHandler = (e) => {
    e.preventDefault()
    getNewLocation(inputState)
    setInputState('')
  }
  
  return (
    <header className='header-container'>
      <h1>IP Address Tracker</h1>
      <form onSubmit={newLocationHandler}>
        <input 
          type='text' 
          value={inputState} 
          onChange={(e) => setInputState(e.target.value)}
          placeholder='Search for any IP address or domain'
          ></input>
        <button type='submit'>
          <FaAngleRight/>
        </button>
      </form>
      <div className='header-outputs'>
        {locationSubmitted ?
          <div className="beat-loader">
            <SyncLoader size={20} color={loaderGrey}/>
          </div> :
          <div className='header-output-section'>
            <h2>IP ADDRESS</h2>
            <p>{location.ip}</p>
          </div>}
          <div className='seperator'></div>
        {locationSubmitted ?
          <div className="beat-loader">
            <SyncLoader size={20} color={loaderGrey}/>
          </div> :
          <div className='header-output-section'>
            <h2>LOCATION</h2>
            <p>{location.address}</p>
          </div>}
          <div className='seperator'></div>
        {locationSubmitted ?
          <div className="beat-loader">
            <SyncLoader size={20} color={loaderGrey}/>
          </div> :
          <div className='header-output-section'>
            <h2>TIMEZONE</h2>
            <p>{location.timezone}</p>
          </div>}
          <div className='seperator'></div>
        {locationSubmitted ?
          <div className="beat-loader">
            <SyncLoader size={20} color={loaderGrey}/>
          </div> :
          <div className='header-output-section'>
            <h2>ISP</h2>
            <p>{location.isp}</p>
          </div>}
      </div>
    </header>
  )
}

export default Header
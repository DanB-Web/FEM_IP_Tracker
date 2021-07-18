import { useEffect } from 'react'
import L from 'leaflet'
import { mapBoxConfig } from '../utils/config'
import '../styles/map.scss'

const Map = ({ location }) => {

  //CUSTOM ICON
  const svgIcon = L.divIcon({
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="46" height="56"><path fill-rule="evenodd" d="M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z"/></svg>`,
    className: "",
    iconSize: [12, 20],
  });

  useEffect(() => {
    //CLEAR PREVIOUS MAP
    document.getElementById('map-container').innerHTML = ''
    //CREATE MAP DIV AND APPEND TO DOM
    const mapDiv = document.createElement('div')
    mapDiv.id = 'mapid'
    document.getElementById('map-container').appendChild(mapDiv)
    //CREATE NEW MAP + TILES
    const mymap = new L.map('mapid').setView([location.lat, location.long], 13)
    L.tileLayer(process.env.REACT_APP_GEO_MAPBOX_URL, mapBoxConfig).addTo(mymap);
    //INSERT CUSTOM MARKER
    const marker = L.marker([location.lat, location.long], {icon: svgIcon}).addTo(mymap);
    //CREATE MARKER POPUP
    marker.bindPopup(`
      <b>Location:</b>
      <br>
      ${location.address}
    `);
  }, [location, svgIcon])

  return (
    <div id='map-container'></div>
  )
}

export default Map
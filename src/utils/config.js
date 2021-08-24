const mapBoxAttribute = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'

export const mapBoxConfig = {
  attribution: mapBoxAttribute,
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  nav: 'bottom-right',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: process.env.REACT_APP_GEO_ACCESS_TOKEN
}


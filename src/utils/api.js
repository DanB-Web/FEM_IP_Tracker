export const fetchAddress = async (ip) => {
  
  let apiReply

  try {
    await fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_GEO_API_KEY}&ipAddress=${ip}`)
    .then(res => res.json())
    .then(data => apiReply = data)
  } catch (e) {
    console.log(e)
  }
  return apiReply
}
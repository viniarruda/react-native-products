import axios from 'axios'
import api from '../../utils/api'

export const searchMap = (address) => {
  return axios.get(api.maps.url + '/json?address=' + encodeURI(address) + '&key=' + api.maps.key)
  .then(res => res.data)
  .catch(err => err.response.data)
}

// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
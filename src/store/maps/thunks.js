import {
  searchGeocodeRequested,
  searchGeocodeFulfilled,
  searchGeocodeRejected
} from './actions'
import { searchMap } from './queries'

export const requestGeocode = (address) => async (dispatch, getState) => {
  dispatch(searchGeocodeRequested())
  const response = await searchMap(address)
  
  if(!response) {
    const error = 'Api rejected'
    dispatch(searchGeocodeRejected(error))

    throw 'Error' 
  }
  
  dispatch(searchGeocodeFulfilled(response))
  return true
}
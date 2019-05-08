import {
  searchProductsRequested,
  searchProductsFulfilled,
  searchProductsRejected
} from './actions'
import { searchProducts } from './queries'

export const requestProducts = (lat, long) => async (dispatch, getState) => {
  dispatch(searchProductsRequested())
  console.log('bbbbbbbbbbbbb')
  let now = new Date()
  const response = await searchProducts(lat, long, now)
  
  if(!response.data) {
    const error = 'Api rejected'
    dispatch(searchProductsRejected(error))

    throw 'Error' 
  }
  console.log('response', response.data)
  dispatch(searchProductsFulfilled(response.data))
  return true
}
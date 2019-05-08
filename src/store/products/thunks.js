import {
  searchPocRequested,
  searchPocFulfilled,
  searchPocRejected,
  searchProductsRequested,
  searchProductsFulfilled,
  searchProductsRejected
} from './actions'
import { searchPoc, searchProducts } from './queries'

export const requestPoc = (lat, long) => async (dispatch, getState) => {
  dispatch(searchPocRequested())
  let now = new Date()
  const response = await searchPoc(lat, long, now)
  
  if(!response.data) {
    const error = 'Api rejected'
    dispatch(searchPocRejected(error))

    throw 'Error' 
  }
  dispatch(searchPocFulfilled(response.data))
  return true
}

export const requestProducts = (search, categoryId) => async (dispatch, getState) => {
  const { products } = getState()
  dispatch(searchProductsRequested())
  // The Query needed to get the right POC (Get the first POC):
  let poc = products.poc.pocSearch[0].id
  const response = await searchProducts(poc, search, categoryId)
  
  if(!response.data) {
    const error = 'Api rejected'
    dispatch(searchProductsRejected(error))

    throw 'Error' 
  }
  dispatch(searchProductsFulfilled(response.data))
  return true
}
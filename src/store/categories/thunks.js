import {
  listCategoriesRequested,
  listCategoriesFulfilled,
  listCategoriesRejected
} from './actions'
import { listCategories } from './queries'

export const requestCategories = () => async (dispatch, getState) => {
  dispatch(listCategoriesRequested())
  console.log('bbbbbbbbbb')
  const response = await listCategories()
  
  if(!response.data) {
    const error = 'Api rejected'
    dispatch(listCategoriesRejected(error))

    throw 'Error' 
  }
  console.log('thunk category', response.data)
  dispatch(listCategoriesFulfilled(response.data))
  return true
}
import {
  listCategoriesRequested,
  listCategoriesFulfilled,
  listCategoriesRejected
} from './actions'
import { listCategories } from './queries'

export const requestCategories = () => async (dispatch, getState) => {
  dispatch(listCategoriesRequested())
  const response = await listCategories()
  
  if(!response.data) {
    const error = 'Api rejected'
    dispatch(listCategoriesRejected(error))

    throw 'Error' 
  }
  dispatch(listCategoriesFulfilled(response.data))
  return true
}
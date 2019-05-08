import {combineReducers} from 'redux'
import products from './products/reducer'
import maps from './maps/reducer'
import categories from './categories/reducer'

const appReducer = combineReducers({
  maps,
  products,
  categories
});

export default (state, action) => appReducer(state, action);
import {combineReducers} from 'redux'
import products from './products/reducer'
import maps from './maps/reducer'

const appReducer = combineReducers({
  maps,
  products
});

export default (state, action) => appReducer(state, action);
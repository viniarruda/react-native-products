import {
  SEARCH_POC_REQUESTED,
  SEARCH_POC_FULFILLED,
  SEARCH_POC_REJECTED,
  SEARCH_PRODUCTS_REQUESTED,
  SEARCH_PRODUCTS_FULFILLED,
  SEARCH_PRODUCTS_REJECTED
} from "./action-types";


const INITIAL_STATE = {
  loading: false,
  poc: null,
  list: null,
  error: null,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_PRODUCTS_REQUESTED: {
      return {
        ...state,
        loading: true,
        list: null,
        error: null,
      };
    }
    case SEARCH_POC_REQUESTED: {
      return {
        ...state,
        loading: true,
        error: null,
        poc: null
      };
    }
    case SEARCH_PRODUCTS_FULFILLED: {
      return {
        ...state,
        loading: false,
        list: action.payload,
        error: null
      };
    }
    case SEARCH_POC_FULFILLED: {
      return {
        ...state,
        loading: false,
        poc: action.payload,
        error: null
      };
    }
    case SEARCH_PRODUCTS_REJECTED:
    case SEARCH_POC_REJECTED: {
      return {
        ...INITIAL_STATE,
        error: action.payload
      };
    }
    default:
      return state;
  }
}
import { 
  SEARCH_PRODUCTS_REQUESTED,
  SEARCH_PRODUCTS_FULFILLED,
  SEARCH_PRODUCTS_REJECTED
} from "./action-types";


const INITIAL_STATE = {
  loading: false,
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
        error: null
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
    case SEARCH_PRODUCTS_REJECTED: {
      return {
        ...INITIAL_STATE,
        error: action.payload
      };
    }
    default:
      return state;
  }
}
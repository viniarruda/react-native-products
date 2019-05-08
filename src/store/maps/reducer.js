import { 
  SEARCH_GEOCODE_REQUESTED,
  SEARCH_GEOCODE_FULFILLED,
  SEARCH_GEOCODE_REJECTED
} from "./action-types";


const INITIAL_STATE = {
  loading: false,
  list: null,
  error: null,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_GEOCODE_REQUESTED: {
      return {
        ...state,
        loading: true,
        list: null,
        error: null
      };
    }
    case SEARCH_GEOCODE_FULFILLED: {
      return {
        ...state,
        loading: false,
        list: action.payload,
        error: null
      };
    }
    case SEARCH_GEOCODE_REJECTED: {
      return {
        ...INITIAL_STATE,
        error: action.payload
      };
    }
    default:
      return state;
  }
}
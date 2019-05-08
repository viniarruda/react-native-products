import { 
  LIST_CATEGORIES_REQUESTED,
  LIST_CATEGORIES_FULFILLED,
  LIST_CATEGORIES_REJECTED
} from "./action-types";


const INITIAL_STATE = {
  loading: false,
  list: null,
  error: null,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LIST_CATEGORIES_REQUESTED: {
      return {
        ...state,
        loading: true,
        list: null,
        error: null
      };
    }
    case LIST_CATEGORIES_FULFILLED: {
      return {
        ...state,
        loading: false,
        list: action.payload,
        error: null
      };
    }
    case LIST_CATEGORIES_REJECTED: {
      return {
        ...INITIAL_STATE,
        error: action.payload
      };
    }
    default:
      return state;
  }
}
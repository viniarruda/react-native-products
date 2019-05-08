import { createAction } from "redux-actions";
import {
	SEARCH_PRODUCTS_REQUESTED,
  SEARCH_PRODUCTS_FULFILLED,
  SEARCH_PRODUCTS_REJECTED
} from "./action-types";

export const searchProductsRequested = createAction(SEARCH_PRODUCTS_REQUESTED);
export const searchProductsFulfilled = createAction(SEARCH_PRODUCTS_FULFILLED);
export const searchProductsRejected = createAction(SEARCH_PRODUCTS_REJECTED);
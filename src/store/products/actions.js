import { createAction } from "redux-actions";
import {
  SEARCH_POC_REQUESTED,
  SEARCH_POC_FULFILLED,
  SEARCH_POC_REJECTED,
	SEARCH_PRODUCTS_REQUESTED,
  SEARCH_PRODUCTS_FULFILLED,
  SEARCH_PRODUCTS_REJECTED
} from "./action-types";

export const searchPocRequested = createAction(SEARCH_POC_REQUESTED);
export const searchPocFulfilled = createAction(SEARCH_POC_FULFILLED);
export const searchPocRejected = createAction(SEARCH_POC_REJECTED);

export const searchProductsRequested = createAction(SEARCH_PRODUCTS_REQUESTED);
export const searchProductsFulfilled = createAction(SEARCH_PRODUCTS_FULFILLED);
export const searchProductsRejected = createAction(SEARCH_PRODUCTS_REJECTED);
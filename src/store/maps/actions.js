import { createAction } from "redux-actions";
import {
	SEARCH_GEOCODE_REQUESTED,
  SEARCH_GEOCODE_FULFILLED,
  SEARCH_GEOCODE_REJECTED
} from "./action-types";

export const searchGeocodeRequested = createAction(SEARCH_GEOCODE_REQUESTED);
export const searchGeocodeFulfilled = createAction(SEARCH_GEOCODE_FULFILLED);
export const searchGeocodeRejected = createAction(SEARCH_GEOCODE_REJECTED);
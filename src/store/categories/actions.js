import { createAction } from "redux-actions";
import {
  LIST_CATEGORIES_REQUESTED,
  LIST_CATEGORIES_FULFILLED,
  LIST_CATEGORIES_REJECTED
} from "./action-types";

export const listCategoriesRequested = createAction(LIST_CATEGORIES_REQUESTED);
export const listCategoriesFulfilled = createAction(LIST_CATEGORIES_FULFILLED);
export const listCategoriesRejected = createAction(LIST_CATEGORIES_REJECTED);
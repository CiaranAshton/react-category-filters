import { createAction } from 'redux-actions';
import fp from 'lodash/fp';

export const UNINITIALISED = 'UNINITIALISED';
export const LOADING = 'LOADING';
export const LOADING_FAILED = 'LOADING_FAILED';
export const LOADED = 'LOADED';

// initial state
const INITIAL_STATE = {
    filters: [],
    activeOption: null,
};

// reducer
export default (state = INITIAL_STATE, { type, payload }) => {};

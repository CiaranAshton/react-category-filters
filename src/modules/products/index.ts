import { createAction } from 'redux-actions';

// statuses
export const UNINITIALISED = 'UNINITIALISED';
export const LOADING = 'LOADING';
export const LOADING_FAILED = 'LOADING_FAILED';
export const LOADED = 'LOADED';

// initial state
const INITIAL_STATE = {
    jumpers: [],
    tshirts: [],
    shorts: [],
    jeans: [],
    status: {},
};

// reducer
export default (state = INITIAL_STATE, { type, payload }) => {};

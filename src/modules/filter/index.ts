import { getProducts, getProductTypes } from '../products';

// types
export const ADD_FILTER = 'ADD_FILTER';
export const ADD_FILTER_SUCCESS = 'ADD_FILTER_SUCCESS';
export const ADD_FILTER_FAILED = 'ADD_FILTER_FAILED';

// actions
export const addFilter = (filter: string): { type: string; filter: string } => ({
    type: ADD_FILTER,
    filter,
});

// statuses
export const LOADING = 'LOADING';
export const FAILED = 'FAILED';
export const SUCCESS = 'SUCCESS';

// errors
export const ISSUE_ADDING_FILTER = 'ISSUE_ADDING_FILTER';

// initial state
const INITIAL_STATE = {
    filters: [],
    status: undefined,
};

// reducer
export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ADD_FILTER:
            return {
                ...state,
                status: LOADING,
            };

        case ADD_FILTER_SUCCESS:
            return {
                ...state,
                filters: [payload, ...state.filters],
                status: SUCCESS,
            };

        case ADD_FILTER_FAILED:
            return {
                ...state,
                error: payload,
                status: FAILED,
            };

        default:
            return state;
    }
};

export const getFilteredProducts = state => {
};

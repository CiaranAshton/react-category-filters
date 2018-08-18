import { getProducts } from '../products';
const { pipe, groupBy } = require('lodash/fp');
const map = require('lodash/fp/map').convert({ cap: false });
const pluralize = require('pluralize');

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
};

// reducer
export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ADD_FILTER:
            return {
                ...state,
                filters: [payload, ...state.filters],
            };

        default:
            return state;
    }
};

// helpers
const refineRange = (item, key) => ({
    label: pluralize(key),
    items: map(({ title }) => title)(item),
});

const groupSelections = (selection, key) => ({
    label: key,
    count: selection.length,
    items: map(refineRange)(groupBy('type')(selection)),
});

// selectors
export const getFilteredProducts = state =>
    pipe(
        groupBy('gender'),
        map(groupSelections),
    )(getProducts(state));

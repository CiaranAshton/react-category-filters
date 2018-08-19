import { getProducts } from '../products';
const { pipe, groupBy, pull, contains } = require('lodash/fp');
const map = require('lodash/fp/map').convert({ cap: false });
const pluralize = require('pluralize');

// types
export const TOGGLE_FILTER = 'TOGGLE_FILTER';

// actions
export const addFilter = (filter: string): { type: string; filter: string } => ({
    type: TOGGLE_FILTER,
    filter,
});

// initial state
const INITIAL_STATE = {
    filters: [],
};

// reducer
export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case TOGGLE_FILTER:
            return {
                ...state,
                filters: contains(payload, state.filters)
                    ? pull(payload, state.filters)
                    : [payload, ...state.filters],
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

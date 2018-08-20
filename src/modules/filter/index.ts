import { getProducts } from '../products';
const { pipe, groupBy, pull, contains } = require('lodash/fp');
const map = require('lodash/fp/map').convert({ cap: false });
const pluralize = require('pluralize');

// action types
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

// types
export type Product = {
    id: string;
    type: string;
    title: string;
    gender: string;
};

export type Selection = {
    label: string;
    count: number;
    items: Range[];
};

export type Range = {
    label: string;
    items: string[];
};

// helpers
const refineRange = (item: string, label: string): Range => ({
    label: pluralize(label),
    items: map('title')(item),
});

const groupSelections = (selection: string, label: string): Selection => ({
    label,
    count: selection.length,
    items: pipe(
        groupBy('type'),
        map(refineRange),
    )(selection),
});

// selectors
export const getFilteredProducts = state =>
    pipe(
        groupBy('gender'),
        map(groupSelections),
    )(getProducts(state));

// types
export const READ_PRODUCTS = 'READ_PRODUCTS';
export const READ_PRODUCTS_SUCCESS = 'READ_PRODUCTS_SUCCESS';
export const READ_PRODUCTS_FAILED = 'READ_PRODUCTS_FAILED';

// actions
export const readProducts = () => ({
    type: READ_PRODUCTS,
});
export const readProductsSuccess = products => ({
    type: READ_PRODUCTS_SUCCESS,
    products,
});
export const readProductsFailed = error => ({
    type: READ_PRODUCTS_SUCCESS,
    error,
});

// statuses
export const UNINITIALISED = 'UNINITIALISED';
export const LOADING = 'LOADING';
export const LOADING_FAILED = 'LOADING_FAILED';
export const LOADED = 'LOADED';

// errors
export const ISSUE_RECIEVING_PRODUCTS = 'ISSUE_RECIEVING_PRODUCTS';

// initial state
const INITIAL_STATE = {
    items: [],
    status: UNINITIALISED,
};

// reducer
export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case READ_PRODUCTS:
            return {
                ...state,
                status: LOADING,
            };

        case READ_PRODUCTS_SUCCESS:
            return {
                ...state,
                items: payload,
                status: LOADED,
            };

        case READ_PRODUCTS_FAILED:
            return {
                ...state,
                error: payload,
                status: LOADING_FAILED,
            };

        default:
            return state;
    }
};

// selectors
export const getProducts = state => state.products.items;

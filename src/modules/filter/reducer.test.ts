import reducer, {
    LOADING,
    SUCCESS,
    FAILED,
    ADD_FILTER,
    ADD_FILTER_SUCCESS,
    ADD_FILTER_FAILED,
    ISSUE_ADDING_FILTER,
} from './';

describe('Filter module', () => {
    test('Add filter', () => {
        const state = {
            filters: [],
            status: undefined,
        };

        const action = {
            type: ADD_FILTER,
            payload: null,
        };

        const expectedResult = {
            status: LOADING,
        };

        expect(reducer(state, action)).toMatchObject(expectedResult);
    });

    test('Add filter success', () => {
        const state = {
            filters: [],
            status: LOADING,
        };

        const action = {
            type: ADD_FILTER_SUCCESS,
            payload: 'shorts',
        };

        const expectedResult = {
            filters: ['shorts'],
            status: SUCCESS,
        };

        expect(reducer(state, action)).toMatchObject(expectedResult);
    });

    test('Add filter failed', () => {
        const state = {
            filters: [],
            status: LOADING,
        };

        const action = {
            type: ADD_FILTER_FAILED,
            payload: ISSUE_ADDING_FILTER,
        };

        const expectedResult = {
            error: ISSUE_ADDING_FILTER,
            status: FAILED,
        };

        expect(reducer(state, action)).toMatchObject(expectedResult);
    });
});

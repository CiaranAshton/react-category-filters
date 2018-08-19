import reducer, { TOGGLE_FILTER } from './';

describe('Filter module', () => {
    test('Add filter', () => {
        const state = {
            filters: [],
        };

        const action = {
            type: TOGGLE_FILTER,
            payload: 'shorts',
        };

        const expectedResult = {
            filters: ['shorts'],
        };

        expect(reducer(state, action)).toMatchObject(expectedResult);
    });

    test('Remove filter', () => {
        const state = {
            filters: ['shorts'],
        };

        const action = {
            type: TOGGLE_FILTER,
            payload: 'shorts',
        };

        const expectedResult = {
            filters: [],
        };

        expect(reducer(state, action)).toMatchObject(expectedResult);
    });
});

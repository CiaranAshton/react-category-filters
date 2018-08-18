import reducer, { ADD_FILTER } from './';

describe('Filter module', () => {
    test('Add filter', () => {
        const state = {
            filters: [],
        };

        const action = {
            type: ADD_FILTER,
            payload: 'shorts',
        };

        const expectedResult = {
            filters: ['shorts'],
        };

        expect(reducer(state, action)).toMatchObject(expectedResult);
    });
});

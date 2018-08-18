import reducer, {
    UNINITIALISED,
    LOADED,
    LOADING,
    LOADING_FAILED,
    READ_PRODUCTS,
    READ_PRODUCTS_SUCCESS,
    READ_PRODUCTS_FAILED,
    ISSUE_RECIEVING_PRODUCTS,
} from './';

describe('Products module', () => {
    test('Read products', () => {
        const state = {
            items: [],
            status: UNINITIALISED,
        };

        const action = {
            type: READ_PRODUCTS,
            payload: null,
        };

        const expectedResult = {
            status: LOADING,
        };

        expect(reducer(state, action)).toMatchObject(expectedResult);
    });

    test('Read products success', () => {
        const state = {
            items: [],
            status: UNINITIALISED,
        };

        const action = {
            type: READ_PRODUCTS_SUCCESS,
            payload: items,
        };

        const expectedResult = {
            items,
            status: LOADED,
        };

        expect(reducer(state, action)).toMatchObject(expectedResult);
    });

    test('Read products failed', () => {
        const state = {
            items: [],
            status: LOADING,
        };

        const action = {
            type: READ_PRODUCTS_FAILED,
            payload: ISSUE_RECIEVING_PRODUCTS,
        };

        const expectedResult = {
            error: ISSUE_RECIEVING_PRODUCTS,
            status: LOADING_FAILED,
        };

        expect(reducer(state, action)).toMatchObject(expectedResult);
    });
});

const items = [
    {
        id: '001',
        title: 'Stripy christmas jumper',
        type: 'jumper',
        img: '',
    },
    {
        id: '002',
        title: 'Wooly sweater',
        type: 'jumper',
        img: '',
    },
    {
        id: '003',
        title: 'Long summer dress',
        type: 'dress',
        img: '',
    },
    {
        id: '004',
        title: 'Light grey shorts',
        type: 'shorts',
        img: '',
    },
    {
        id: '005',
        title: 'Pin striped beach shorts',
        type: 'shorts',
        img: '',
    },
];

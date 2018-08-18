import { getProducts, getProductTypes } from './';

describe('Product module selectors', () => {
    test('getProducts', () => {
        const state = {
            products: {
                items,
                status: 'SUCCESS',
            },
        };

        const expectedResult = [
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

        expect(getProducts(state)).toEqual(expectedResult);
    });

    test('getProductTypes', () => {
        const state = {
            products: {
                items,
                status: 'SUCCESS',
            },
        };

        const expectedResult = ['jumpers', 'dresses', 'shorts'];

        expect(getProductTypes(state)).toEqual(expectedResult);
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

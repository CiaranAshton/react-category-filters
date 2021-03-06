import reducer, { getFilteredProducts } from './';
import { Product, Selection, Range } from './';
import productsReducer from '../products/index';
const { createStore, combineReducers } = require('redux');
const { uniqueId } = require('lodash/fp');

// integration tests
describe('Filter integration tests', () => {
    test('With no filters', () => {
        const store = createStoreWithProducts(
            product('Jumper', 'Christmas Jumper', 'Female'),
            product('Jumper', 'Wooly Sweater', 'Male'),
            product('Shorts', 'Pinstriped Shorts', 'Male'),
            product('Dress', 'Long Summer Dress', 'Female'),
            product('Dress', 'Blue Straight Dress', 'Female'),
            product('Shorts', 'Cargos', 'Male'),
        );

        const getFilteredProductsExpected = products(
            selection('Female', 3,
                range('Jumpers',
                    item('Christmas Jumper'),
                ),
                range('Dresses',
                    item('Long Summer Dress'),
                    item('Blue Straight Dress'),
                )
            ),
            selection('Male', 3,
                range('Jumpers',
                    item('Wooly Sweater'),
                ),
                range('Shorts',
                    item('Pinstriped Shorts'),
                    item('Cargos'),
                ),
            ),
        );

        expect(getFilteredProducts(store.getState()))
            .toEqual(getFilteredProductsExpected);
    });
});

// helper functions
const product = (type: string, title: string, gender: string): Product => ({
    // id: uniqueId('product-'),
    id: '01',
    type,
    title,
    gender,
});

const products = (...selections: Selection[]): Selection[] => selections;

const selection = (label: string, count: number, ...items: Range[]): Selection => ({
    label,
    count,
    items,
});

const range = (label: string, ...items: string[]): Range => ({
    label,
    items,
});

const item = (product: string): string => product;

// state management
const createStoreWithProducts = (...products: Product[]) =>
    createStore(
        combineReducers({
            filter: reducer,
            products: productsReducer,
        }),
        {
            products: {
                items: products,
            },
        },
    );

const log = stuff => {
    console.log(JSON.stringify(stuff, null, 2));
    return stuff;
};

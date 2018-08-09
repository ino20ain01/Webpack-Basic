import * as Types from '../constants/ActionTypes';
import findIndex from '../utils/findIndex';

let initialState = [];


const products = (state = initialState, action) => {
    let index = -1;
    let { id, product } = action;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products
            return [...state];
        case Types.DELETE_PRODUCT:
            index = findIndex(state, id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(product);
            return [...state];
        case Types.UPDATE_PRODUCT:
            index = findIndex(state, product.id);
            if (index !== -1) {
                state[index] = product;
            }
            return [...state];
        default:
            return state;
    }
};

export default products;
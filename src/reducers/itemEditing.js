import * as Types from '../constants/ActionTypes';

let initialState = {};

const itemEditing = (state = initialState, action) => {
    switch (action.type) {
        case Types.EDIT_PRODUCT:
            return action.product;
        default:
            return state;
    }
}

export default itemEditing;
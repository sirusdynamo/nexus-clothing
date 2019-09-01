import { CartActionTypes } from "./cart.types"
import { addItemToCart, removeItemFromCart, removeUnitItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};


const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };

        case CartActionTypes.REMOVE_UNIT_ITEM:
            return {
                ...state,
                cartItems: removeUnitItemFromCart(state.cartItems, action.payload)
            };
        default:
            return state;
    }
};


export default cartReducer;




// Reducers
// A reducer is the pure function that we will use to transform our store state. Reducers are triggered whenever an action is dispatched and receive both the current state of that reducer (which will be undefined to begin with) and the action that was dispatched.
import { ADD_TO_CART, INCREASE, DECREASE } from '../type';

const cartReducer = (state = {}, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            console.log(action.payload, "reducer cart");
            return {
                cartItems: action.payload
            }

        case INCREASE:
            console.log(action.payload, "reducer increase");
            return {
                cartItems: action.payload
            }

        case DECREASE:
            console.log(action.payload, "reducer dec");
            return {
                cartItems: action.payload
            }

        default:
            return state;
    }


}
export default cartReducer;
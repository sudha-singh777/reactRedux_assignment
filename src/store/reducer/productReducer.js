import { FETCH_MOBILE_API } from '../type';

// const initialState = {
//     pending: false,
//     products: [],
//     error: null
// }
const productReducer = (state = {}, action) => {
    switch (action.type) {

        case FETCH_MOBILE_API:
            return action.payload

        default:
            return state;
    }

}
export default productReducer;
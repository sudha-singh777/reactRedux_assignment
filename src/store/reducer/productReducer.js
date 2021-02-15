import { FETCH_MOBILE_API } from '../type';

const productReducer = (state = {}, action) => {
    switch (action.type) {

        case FETCH_MOBILE_API:
            return action.payload

        default:
            return state;
    }

}
export default productReducer;
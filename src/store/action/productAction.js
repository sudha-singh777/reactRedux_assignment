import { FETCH_MOBILE_API } from '../type';


export const fetchApi = () => (dispatch) => {
    //console.log("hello");
    const url = "https://todo-app-9a245-default-rtdb.firebaseio.com/todoDatas/mobile_api.json";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: FETCH_MOBILE_API,
                payload: data
            })
        });
}
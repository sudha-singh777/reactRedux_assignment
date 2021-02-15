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

export const filterApiData = (allPro, filterValue) => (dispatch, getState) => {
    console.log("allllll", getState());

    if (!allPro) {
        console.log("hello")
            // let filterData = allPro.filter((filterValues) => {
            //     return filterValues.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1;
            // });
    }


    // let filData = allPro.filter((filterData) => {
    //             return filterData.name.toLowerCase().indexOf(filterData.toLowerCase()) !== -1;
    //         }

    //     )
    // console.log("allllll", filterValue);
    // allPro.filter((filterValues) => (
    //     filterValues.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
    // ))

}


// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         dispatch({
//             type: FETCH_MOBILE_API,
//             payload: data
//         })
//     });
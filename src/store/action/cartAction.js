import { ADD_TO_CART, INCREASE, DECREASE } from '../type';

export const addToCart = (product) => (dispatch) => {
    //  console.log(product, "product")
    let cartItem = [];
    let alreadyExists = false;
    const cartData = JSON.parse(localStorage.getItem('cartValue')) || '';
    cartItem.push(...cartData);
    console.log(cartItem, "check")


    cartItem.forEach((x) => {
        if (x.id === product.id) {
            alreadyExists = true;
            x.count++;
        }
    });
    if (!alreadyExists) {
        console.log(product, "hello")
        cartItem.push({...product, count: 1 });
    }
    dispatch({
        type: ADD_TO_CART,
        payload: { cartItem }
    })
    localStorage.setItem("cartValue", JSON.stringify(cartItem));
};

export const increaseQuantity = (cartId) => (dispatch) => {
    let cartItems = [];
    var newCart = JSON.parse(localStorage.cartValue);
    cartItems.push(...newCart)
    console.log(cartItems, "per")
    let tempCart = cartItems.map((cartItem) => {
        if (cartItem.id === cartId) {
            cartItem.count++;
            console.log(cartItem, "ff")
        }
    })
    console.log(cartItems, "ii")
    localStorage.setItem("cartValue", JSON.stringify(cartItems));
}

export const decreaseQuantity = (cartId, cartCount) => () => {
    let cartItems = [];
    var newCart = JSON.parse(localStorage.cartValue);

    if (cartCount === 1) {
        cartItems = newCart.filter(cartData => cartData.id !== cartId)
    } else {

        cartItems.push(...newCart)
        let tempCart = cartItems.map((cartItem) => {
            if (cartItem.id === cartId) {
                cartItem.count--;
                console.log(cartItem, "ff")
            }
        })
        console.log(cartItems, "ii")

    }
    localStorage.setItem("cartValue", JSON.stringify(cartItems));
}
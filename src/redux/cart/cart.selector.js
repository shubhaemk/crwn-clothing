import { createSelector } from 'reselect';

//1.st type of selector
//selects a slice of store and returs it [ 1 level deep ]
const selectCart = state => state.cart;

//2nd type of selector
//can go many level deep

export const selectCartItems = createSelector(
    [selectCart], //choose from which slice you want to have data    
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
            accumalatedQuantity + cartItem.quantity,
        0
    )
)

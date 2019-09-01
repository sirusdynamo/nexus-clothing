export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem =>
        cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems
            .map(cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 } :
                cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1 }]
}

export const removeUnitItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingCartItem) {
        ///Remove All items of a particular Id


        return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1 } :
            cartItem
        ).filter(cartItem => cartItem.quantity > 0)
    }
    return [...cartItems]
}


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
    if (existingCartItem) {

        let cart = cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
        return cart;
    }
    return [...cartItems]

}
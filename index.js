const cartItems = [];

function addToCart(itemToCart) {
    let index = cartItems.findIndex(item => item.id === itemToCart);

    if (index === -1) {
        itemToCart.count = 1;
        cartItems.push(itemToCart);
    }
    else {
        cartItems[index].count++; 
    }
}
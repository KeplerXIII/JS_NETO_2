import {catalog, cart} from './data.mjs';
import {addToCart, removeFromCart, calculateCartTotal, clearCart } from './functions.mjs'



clearCart();

addToCart(catalog[0], 1);
addToCart(catalog[1], 1);
addToCart(catalog[2], 1);

console.log(calculateCartTotal())

removeFromCart(1, 1)

console.log(cart)
console.log(calculateCartTotal())



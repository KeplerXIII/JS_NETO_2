import {cart} from './data.mjs';

export function addToCart(product, quantity = 1) {
    const itemIndex = cart.findIndex(item => item.good.id === product.id);
    if (itemIndex !== -1) {
        cart[itemIndex].amount += quantity;
    } else {
        cart.push({ good: product, amount: quantity });
    }
}

export function removeFromCart(productId, quantity = 1) {
    const itemIndex = cart.findIndex(item => item.good.id === productId);
    if (itemIndex !== -1) {
        if (quantity <= cart[itemIndex].amount) {
        cart[itemIndex].amount -= quantity;
        if (cart[itemIndex].amount === 0) {
            cart.splice(itemIndex, 1);
        }
    }
}
}

export function calculateCartTotal() {
    let totalAmount = 0;
    let totalSumm = 0;

    cart.forEach(item => {
        totalAmount += item.amount;
        totalSumm += item.amount * item.good.price;
    }
)

return { totalAmount, totalSumm };
}

export function clearCart() {
    cart.length = 0;
}
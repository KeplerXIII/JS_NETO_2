const catalog = [
    {
      id: 1,
      name: 'Футболка',
      description: 'Простая футболка с коротким рукавом',
      sizes: ['S', 'M', 'L', 'XL'],
      price: 1000,
      available: true
    },
    {
      id: 2,
      name: 'Джинсы',
      description: 'Классические джинсы на каждый день',
      sizes: ['28/30', '30/30', '32/30', '34/30', '36/30'],
      price: 2500,
      available: true
    },
    {
      id: 3,
      name: 'Куртка',
      description: 'Тёплая куртка с капюшоном',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      price: 5000,
      available: false
    },
    {
      id: 4,
      name: 'Шорты',
      description: 'Лёгкие шорты на лето',
      sizes: ['S', 'M', 'L', 'XL'],
      price: 800,
      available: true
    },
    {
      id: 5,
      name: 'Платье',
      description: 'Женское летнее платье',
      sizes: ['S', 'M', 'L'],
      price: 3500,
      available: true
    }
  ];

function addToCart(product, quantity = 1) {
    const itemIndex = cart.findIndex(item => item.good.id === product.id);
    if (itemIndex !== -1) {
        cart[itemIndex].amount += quantity;
    } else {
        cart.push({ good: product, amount: quantity });
    }
}

function removeFromCart(productId, quantity = 1) {
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

function calculateCartTotal() {
    let totalAmount = 0;
    let totalSumm = 0;

    cart.forEach(item => {
        totalAmount += item.amount;
        totalSumm += item.amount * item.good.price;
    }
);

return { totalAmount, totalSumm };
}

function clearCart() {
    cart = [];
}

clearCart();

// addToCart(catalog[0], 2);
// removeFromCart(1, 1)

console.log(calculateCartTotal())
console.log(cart)


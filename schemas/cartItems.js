// schemas/cartItem.js
export default{
    title: 'Cart Item',
    name: 'cartItem',
    type: 'object',
    fields: [
      { title: 'Product Name', name: 'productName', type: 'string' },
      { title: 'Quantity', name: 'quantity', type: 'number' },
      { title: 'Price', name: 'price', type: 'number' },
      // Add any other fields specific to a cart item
    ],
  }
  
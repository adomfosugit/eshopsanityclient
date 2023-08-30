// schemas/order.js
export default{
    title: 'Order',
    name: 'order',
    type: 'document',
    fields: [
      {
        title: 'Reference Number',
        name: 'referenceNumber',
        type: 'string',
      },
      {
        title: 'Cart Items',
        name: 'cartItems',
        type: 'array',
        of: [{ type: 'reference', to:[{type:'product'}] }], // Create another schema for cart items
      },
      {
        title: 'Shipping Details',
        name: 'shippingDetails',
        type: 'object',
        fields: [
          { title: 'Name', name: 'name', type: 'string' },
          { title: 'Address', name: 'address', type: 'string' },
          { title: 'Phone', name: 'phone', type: 'string' },
        ],
      },
      {
        name: 'stage',
        title: 'Stage',
        type: 'string',
        options: {
          list: ['Order Confirmed', 'Processing', 'Shipped', 'Out of Delivery', 'On Hold', 'Delayed', 'Completed']
        }
      }
    ],
  }
  
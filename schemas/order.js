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
        title: 'Created at',
        name: 'createdAt',
        type: 'datetime'
      },
      {
        title: 'Payment Method',
        name: 'paymentMethod',
        type: 'string',
        
      },
      {
        title: 'Shipping Details',
        name: 'shippingDetails',
        type: 'string',
        
      },
      {
        title: 'Cart Details',
        name: 'cartsummary',
        type: 'string',
        
      },
      {
        name: 'stage',
        title: 'Stage',
        type: 'string',
        options: {
          list: ['Processing','Order Confirmed','Shipped', 'Out of Delivery', 'On Hold', 'Delayed', 'Completed']
        }
      }
    ],
  }
  
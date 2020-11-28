const mongoose = require('mongoose');

const { Schema } = mongoose

const orderSchema = new Schema({
  products: {
    type: [],
    required: true
  },
  discountCode: {
    type: String | null
  },
  orderNumber: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  // phone number, email, name
  userInfo: {
    type: {},
    required: true
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now
  },
  delivered: {
    type: Boolean,
    default: false
  },
  paid: {
    type: Boolean,
    default: false
  },
  inStock: {
    type: Boolean,
    default: true
  }
})

const OrderSchema = mongoose.model('order', orderSchema)

module.exports = OrderSchema;
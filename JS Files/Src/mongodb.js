// mongodb.js
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/MPR_Sem-4")
    .then(() => {
        console.log('Mongodb connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const signupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    Display: { 
      type: String
    },
    detail: {
        type: String
      },
    processor: {
      type: String
    },
    ram: {
      type: String
    },
    storage: { 
      type: String
    },
    in_detail: {
      type: String
    },
    performance: { 
      type: String
    },
    otherFeatures: {
        type: String
    },
    img1 : {
      type: String
    },
    img2 : {
      type: String
    },
    img3 : {
      type: String
    }
  });

  const cartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});


// Define models with explicit collection names
const LoginModel = mongoose.model('Login', loginSchema, 'login_collection');
const SignupModel = mongoose.model('Signup', signupSchema, 'signup_collection');
const ProductModel = mongoose.model('product', productSchema, 'product');

module.exports = { LoginModel, SignupModel, ProductModel };

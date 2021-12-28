const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    title:{type:String},
    price: { type:Number },
    description: {type:String},
    image:{type:String },
    inCart: {type: Boolean},
    count:{type:Number},
    category:{type:String},
    color:{type:String},
    total:{type:Number},

});

const Product = mongoose.model('products', productSchema);

module.exports = Product;



// {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","inCart":false,"count":0, "total":0},
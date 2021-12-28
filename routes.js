const { Router } = require('express');
const multer  = require('multer')
const routes = Router();
const {uploadImage, createProduct, 
getAllProducts, getProductById, addToCart,
inCrement, reduceItem, removeItem, clearCart,
sendOrder,contactUs
} = require('./services');



const upload = multer()  

routes.post( '/upload', upload.single('avatar'),  uploadImage );

// route for adding a new product.
routes.post('/create', createProduct)

// Getting all the products

routes.get('/', (req, res)=>{
    try{

        res.status(200).json({Message: 'Api is working fine', success:true})
    }catch(err){
        res.status(404).json({Message:'There is something wrong with the API please deal'})
    }
})

routes.get('/allProduct', getAllProducts)

// Getting a product by id;

routes.get('/getProduct/:id', getProductById);

routes.get('/add/:id',  addToCart)

routes.get('/increase/:id',  inCrement) 

routes.get('/remove/:id',  removeItem) 

routes.get('/decrease/:id',  reduceItem) 

routes.get('/clear', clearCart);

routes.post('/order', sendOrder);

routes.post('/contact', contactUs);

module.exports = routes; 
    

   
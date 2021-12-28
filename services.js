
const ImageKit = require("imagekit");
const {StatusCodes, StatusMessages} = require('./config/status_codes');
const Product = require('./models/products');
const nodemailer = require('nodemailer');
const {htmlTep, contactTep} = require('./html');



const uploadImage = async(req, res) =>{

    let imagekit = new ImageKit({
        publicKey : "public_TilCfQr6rTdN/vaH4b4HMa+ZIbg=",
        privateKey : "private_5JKLG4rpmCWytR/PyqLyC+dEvzI=",
        urlEndpoint : "https://ik.imagekit.io/er9sori5c2z"
    });   

  
    
    imagekit.upload({
        file : req.file.buffer, //required  
        fileName : "avatar",   //required
     
    }).then(response => {
        res.status(StatusCodes?.OK).json({message: StatusMessages?.upload_successful, 
            success:true, 
             data:response?.url})
    }).catch(error => {
        res.status(StatusCodes?.BAD).json({message: StatusMessages?.upload_fail, success: false, 
            err: error
        })
        
    });  
       

}

const createProduct = async(req, res) =>{

    const {title, price, description, image,
         category, color
    } = req.body;

   try{

    const newProduct = new Product({

        title,  
        price,
        description,
        image,
        inCart: false,
        count:0,
        category,
        total:0,
        color
    })

    const prod = await newProduct.save();
    res.status(StatusCodes?.OK).json({message:StatusMessages.product_added, 
    success:true, product:prod
    })

   }catch(err){
    res.status(StatusCodes?.BAD).json({message:StatusMessages.product_add_fail, 
        success:false, error:err
        })
   }

}


const getAllProducts = async(req, res) =>{

 try{
    const allProducts = await Product.find({});
    res.status(StatusCodes?.OK).json({message:StatusMessages?.all_products, success:true, products: allProducts});

 }catch(err){
    res.status(StatusCodes?.Bad).json({message:StatusMessages?.all_products_failed, success: false, error:err});

}
}

const getProductById = async(req, res) =>{
    try{
        const id = req.params.id;

        const aProduct = await Product.findById({_id: id});
        res.status(StatusCodes?.OK).json({message:StatusMessages?.gotten_a_Product, success:true, data:aProduct })


    }catch(err){

        res.status(StatusCodes?.BAD).json({message:StatusMessages?.gotten_product_failed, success:false, error:err })

    }
}

const addToCart = async(req, res ) =>{

    try {

        const id = req.params.id;
        const user = await Product.findOne({_id: id});
        const newCount = user?.count + 1;
        const updated = await Product.findOneAndUpdate({_id: id}, {inCart: true, count:newCount, total: user?.price * newCount}, {new : true});
        res.status(StatusCodes.OK).json({message: StatusMessages?.added_to_cart, success:true, data:updated});


    }catch (err){
        res.status(StatusCodes.BAD).json({message:StatusMessages?.added_to_cart_failed, success:false, error:err})
    }
}

const inCrement = async(req, res) =>{

    try {
        const id = req.params.id;
        const user = await Product.findOne({_id: id});
        const newCount = user?.count + 1;
        const updated = await Product.findOneAndUpdate({_id: id}, {count:newCount, total: user?.price * newCount }, {new : true});
        res.status(StatusCodes.OK).json({message: 'Increased cart', success:true, data:updated});
    }catch (err){
        res.status(StatusCodes.BAD).json({message:'Could not increase', success:false, error:err})
    }
}

const reduceItem = async(req, res) =>{

    try {
        const id = req.params.id;
        const user = await Product.findOne({_id: id});
        const updated = await Product.findOneAndUpdate({_id: id}, {count: user.count - 1, total: user.count * user.price}, {new : true});
        res.status(StatusCodes.OK).json({message: 'Item  reduced', success:true, data:updated});
    }catch (err){
        res.status(StatusCodes.BAD).json({message:'Could not decrease', success:false, error:err})
    }
}

const removeItem = async(req, res ) =>{

    try {

        const id = req.params.id;

        const updated = await Product.findOneAndUpdate({_id: id}, {inCart: false, count:0}, {new : true});
        res.status(StatusCodes.OK).json({message: 'removed already', success:true, data:updated});


    }catch (err){
        res.status(StatusCodes.BAD).json({message:'removed failed', success:false, error:err})
    }
}

const clearCart = async(req, res) =>{

    try{
      
           const update = await Product.updateMany({inCart:true}, {inCart:false, count: 0}, { multi: true });
           res.status(StatusCodes?.OK).json({message:StatusMessages?.cleared_cart, succes:true})
        
    }catch(err){
        
        res.status(StatusCodes?.BAD).json({message:StatusMessages.err_clear_cart, success:false })
    }
}

const sendOrder = async(req, res) =>{
    try{
        const userOrder = req.body.order;
        const orderNum = req.body.num;
 
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: 'mailsender7e2', // generated ethereal user
              pass: 'eqfnbbrtozulwucb', // generated ethereal password
            },
     });

     const newMail = {
        from: {
            name:'Elite Technologies New Order',
            address:'mailsender7e2'
        } , 
        to: ['isaackelvin378@gmail.com', 'akheituamepascal@gmail.com'],
        subject: 'Order',
        html : htmlTep(userOrder, orderNum)
       
    }

    transporter.sendMail(newMail, (err, done)=>{
        if(err){
            return res.status(400).json({Message:`Message not sent ${err}`, success:false})
        }
        console.log('message sent')
        return res.status(200).json({Message:'Message Sent Successfully', success:true})
    })

      
    }catch (err){
        throw Error(err)
    }
}

const contactUs = async(req, res) =>{
    try{

        const contacts = req.body;
      
 
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: 'mailsender7e2', // generated ethereal user
              pass: 'eqfnbbrtozulwucb', // generated ethereal password
            },
     });

     const newMail = {
        from: {
            name:'Elite Technologies Customer Feedback',
            address:'mailsender7e2'
        } , 
        to: ['isaackelvin378@gmail.com', 'akheituamepascal@gmail.com'],
        subject: 'Customer Feedback',
        html : contactTep(contacts)
       
    }

    transporter.sendMail(newMail, (err, done)=>{
        if(err){
            return res.status(400).json({Message:`Message not sent ${err}`, success:false})
        }
        console.log('message sent')
        return res.status(200).json({Message:'Message Sent Successfully', success:true})
    })

    }catch(err){
        throw Error(err)
    }
}  
   


module.exports = {
    uploadImage, createProduct,
     getAllProducts , getProductById,
      addToCart , inCrement, reduceItem,
      removeItem, clearCart, sendOrder, contactUs
}
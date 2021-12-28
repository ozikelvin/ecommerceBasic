const mongoose = require('mongoose');
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const logger = require('./logger');

const {StatusMessages} = require('./status_codes');

const connect =()=>{
    try{
        mongoose.connect(process.env.URI, options).then(res =>{
            if(res){
                logger(StatusMessages.db_connect_success);
            }else{
                logger(StatusMessages.db_connect_failure);
            }
        })
    }catch{
        throw Error(StatusMessages.db_connect_failure)
    }
}

module.exports = {
    connect
}
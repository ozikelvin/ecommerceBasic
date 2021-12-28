const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3005;
const {connect } = require('./config/db');
const logger = require('./config/logger');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

app.use(cors());

app.use(express.static('./public'));
app.use(express.json());                     
app.use(express.urlencoded({extended: true}))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });

connect();

app.use(routes)

app.listen(port , ()=>{
    logger(`Sever is listening to port ${port}`)
})
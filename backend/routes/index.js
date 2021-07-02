// import express
const express = require('express');

// import express router
const router = express.Router();

console.log('Connection Successful!!');

// adding api route
router.use('/api', require('./api'));

// export the router
module.exports = router;

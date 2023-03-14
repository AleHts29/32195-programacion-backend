const express = require('express');
const { getDatosControllers, postDatosControllers } = require('../controllers/products.Controllers.js')

const router = express.Router();


// get
router.get('/', getDatosControllers);

// post
router.post('/', postDatosControllers);



module.exports = router;
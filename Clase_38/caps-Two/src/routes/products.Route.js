const express = require('express');
const { getDatosControllers, postDatosControllers, deleteDatosControllers } = require('../controllers/products.Controllers.js')

const router = express.Router();


// get
router.get('/', getDatosControllers);

// post
router.post('/', postDatosControllers);


// ejercico
router.delete('/', deleteDatosControllers);


module.exports = router;
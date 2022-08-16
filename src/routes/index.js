const { Router } = require('express');
const productRouter= require('./ProductRoute.js');
const categoryRouter = require('./CategoryRoute.js');
const router = Router();

router.use('/product', productRouter)
router.use('/category', categoryRouter)



module.exports = router;
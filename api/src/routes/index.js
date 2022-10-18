const { Router } = require('express');
const productRouter= require('./ProductRoute.js');
const categoryRouter = require('./CategoryRoute.js');
const ventaRouter = require('./VentaRoute');
const router = Router();

router.use('/product', productRouter)
router.use('/category', categoryRouter)
router.use('/venta', ventaRouter)



module.exports = router;
const { Router } = require('express');
const productRouter= require('./ProductRoute.js');
const categoryRouter = require('./CategoryRoute.js');
const ventaRouter = require('./VentaRoute');
const compraRouter = require('./CompraRoute');
const provedorRouter = require('./ProvedorRoute');
// const clienteRouter = require('./ClienteRoute');
const router = Router();

router.use('/product', productRouter)
router.use('/category', categoryRouter)
router.use('/venta', ventaRouter)
router.use('/compra', compraRouter)
router.use('/provedor', provedorRouter)
// router.use('/cliente', clienteRouter)



module.exports = router;
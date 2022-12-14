const { Router } = require('express');
const router = Router();
const {Venta,Cliente} = require('../db.js');


//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
router.get("/:idVenta",async (req, res, next) => {
    const{idVenta} = req.params;
    try{
        const venta = await Venta.findOne(
            { where: {id: idVenta}}
        )
        res.send(venta)
    }
    catch(err){
        next(err);
    }
})
//////////////////////////////////////////////////////////
router.get("/",async (req, res, next) => {
    try{
        const ventas = await Venta.findAll()
        res.send(ventas)
    }
    catch(err){
        next(err);
    }
})
//////////////////////////////////////////////////////////
router.post("/", async (req, res, next) => {
    const {total,resumen,idCliente} = req.body;
    try{
      const newVenta = await Venta.create({total,resumen})
      if (idCliente){
        const cliente= await Cliente.findOne(
          { where: {id: idCliente}}
        )
        await cliente.addVentas(newVenta)
        const venta= await Venta.findOne(
            { where: {ClienteId: idCliente}}
        )
        res.send(venta)
      }
      else {res.send(newVenta)}
    }
    catch(err){
      next(err);
    }
})
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////  
//////////////////////////////////////////////////////////
router.delete("/", async (req, res, next) => {
  const {id} = req.body;
  try{
    if (id){
      await  Venta.destroy({
        where: {
          id: id
        }
      });
    }    
    res.send("Venta Eliminada")
  }
  catch(err){
    next(err);
  }
})      
//////////////////////////////////////////////////////////    
module.exports = router;
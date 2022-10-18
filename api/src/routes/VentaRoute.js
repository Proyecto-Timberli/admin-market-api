const { Router } = require('express');
const router = Router();
const {Venta} = require('../db.js');


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
    const {total,resumen} = req.body;
    try{
      const newVenta = await Venta.create({total,resumen})
      res.send(newVenta)
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
  console.log("---------------------")
  console.log(id)
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
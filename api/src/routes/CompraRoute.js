const { Router } = require('express');
const router = Router();
const {Compra,Provedor} = require('../db.js');


//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
router.get("/:idCompra",async (req, res, next) => {
    const{idCompra} = req.params;
    try{
        const compra = await Compra.findOne(
            { where: {id: idCompra}}
        )
        res.send(compra)
    }
    catch(err){
        next(err);
    }
})
//////////////////////////////////////////////////////////
router.get("/",async (req, res, next) => {
    try{
        const compras = await Compra.findAll()
        res.send(compras)
    }
    catch(err){
        next(err);
    }
})
//////////////////////////////////////////////////////////
router.post("/", async (req, res, next) => {
    const {total,resumen,idProvedor} = req.body;
    try{
      const newCompra= await Compra.create({total,resumen})
      if (idProvedor){
        const provedor= await Provedor.findOne(
          { where: {id: idProvedor}}
        )
        await provedor.addCompras(newCompra)
        const compra= await Compra.findOne(
            { where: {ProvedorId: idProvedor}}
        )
        res.send(compra)
      }
      else {res.send(newCompra)}
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
      await  Compra.destroy({
        where: {
          id: id
        }
      });
    }    
    res.send("Compra Eliminada")
  }
  catch(err){
    next(err);
  }
})      
//////////////////////////////////////////////////////////    
module.exports = router;
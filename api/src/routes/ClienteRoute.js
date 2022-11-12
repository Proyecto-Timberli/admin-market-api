const { Router } = require('express');
const router = Router();
const {Cliente} = require('../db.js');


//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
router.get("/:idCliente",async (req, res, next) => {
    const{idCliente} = req.params;
    try{
        const Cliente = await Cliente.findOne(
            { 
                where: {id: idCliente},
            }
        )
        res.send(Cliente)
    }
    catch(err){
        next(err);
    }
})
//////////////////////////////////////////////////////////
router.get("/",async (req, res, next) => {
    try{
        const Clientes = await Cliente.findAll()
        res.send(Clientes)
    }
    catch(err){
        next(err);
    }
})
//////////////////////////////////////////////////////////
router.post("/", async (req, res, next) => {
    const {name,informacion} = req.body;
    try{
      const newCliente= await Cliente.create({name,informacion})
      res.send(newCliente)
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
      await  Cliente.destroy({
        where: {
          id: id
        }
      });
    }    
    res.send("Cliente Eliminada")
  }
  catch(err){
    next(err);
  }
})      
//////////////////////////////////////////////////////////    
module.exports = router;
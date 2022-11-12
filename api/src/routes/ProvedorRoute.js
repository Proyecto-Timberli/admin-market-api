const { Router } = require('express');
const router = Router();
const {Provedor,Compra} = require('../db.js');


//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
router.get("/:idProvedor",async (req, res, next) => {
    const{idProvedor} = req.params;
    try{
        const provedor = await Provedor.findOne(
            { 
                where: {id: idProvedor},
            }
        )
        res.send(provedor)
    }
    catch(err){
        next(err);
    }
})
//////////////////////////////////////////////////////////
router.get("/",async (req, res, next) => {
    try{
        const provedores = await Provedor.findAll()
        res.send(provedores)
    }
    catch(err){
        next(err);
    }
})
//////////////////////////////////////////////////////////
router.post("/", async (req, res, next) => {
    const {name,informacion} = req.body;
    try{
      const newProvedor= await Provedor.create({name,informacion})
      res.send(newProvedor)
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
      await  Provedor.destroy({
        where: {
          id: id
        }
      });
    }    
    res.send("Provedor Eliminada")
  }
  catch(err){
    next(err);
  }
})      
//////////////////////////////////////////////////////////    
module.exports = router;
const { Router } = require('express');
const router = Router();
const {Category} = require('../db.js');
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
router.get("/",async (req, res, next) => {
    try{
        const categories = await Category.findAll()
        res.send(categories)
    }
    catch(err){
        next(err);
    }
})
//////////////////////////////////////////////////////////
router.post("/", async (req, res, next) => {
    const {name} = req.body;
    try{
      const newCategory = await Category.create({name})
      res.send(newCategory)
    }
    catch(err){
      next(err);
    }
})
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////      
module.exports = router;

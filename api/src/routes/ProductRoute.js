const { Router } = require('express');
const router = Router();
const { Product,Category} = require('../db.js');
const { Op, where } = require('sequelize');
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
router.get("/", async (req, res, next) => {
    try{
      const products = await Product.findAll({
        include: {
          model: Category,
          attributes: ["id", "name"],
          through:{
            attributes: []
          }
        }
      }) 
      const productsRes= products.map(product => product = {
        ...product.dataValues,
        categories:product.dataValues.categories.map(cat => cat =
        cat.name
      )}) 
      const response = [...productsRes]
    
    return res.send(response)
   
  }catch(err){
    next(err);
  }
})
//////////////////////////////////////////////////////////
router.get("/:idProduct", async (req, res, next) => {
  const{idProduct} = req.params;
    try{
        const product = await Product.findOne(
          { where: {id: idProduct},
          include: {
            model: Category,
            attributes: ["id", "name"],
            through:{
              attributes: []
            }
          }}
        )
        const productRes = {
          ...product.dataValues,
          categories:product.dataValues.categories.map(cat => cat =
          cat.name
        )}
        if (product){
          return res.send(productRes)
        }
        else {
          return res.status(404).send("no existe esta /:idProduct --> "+idProduct)
        }              
    }catch(err){
      next(err);
    }
});
//////////////////////////////////////////////////////////

router.post("/", async (req, res, next) => {
  const {products} = req.body;
  try{
    if(!products.length){
      const {name,make,amount,price,buyprice,stock,description,image,categoriesids} = products[0];
      const newProduct = await Product.create({name,make,amount,price,buyprice,stock,description,image})
      if (categoriesids){
        for (let i = 0 ; i < categoriesids.length ; i++){
          await newProduct.addCategory(categoriesids[i])
        }
      }
      
      res.send(newProduct)
    }else{
      for (let i = 0 ; i < products.length;i++){
        const {name,make,amount,price,buyprice,stock,description,image,categoriesids} = products[i];
        const newProduct = await Product.create({name,make,amount,price,buyprice,stock,description,image})
        if (categoriesids){
          for (let i = 0 ; i < categoriesids.length ; i++){
            await newProduct.addCategory(categoriesids[i])
          }
        }
      }
      res.send("se crearon los productos cargados") 
    }
  }
  catch(err){
    next(err);
  }
})      
//////////////////////////////////////////////////////////
router.put("/", async (req, res, next) => {
  const {products} = req.body;
  console.log(products)
  try{
    if (products.length){
      for (let i = 0 ; i < products.length ; i++){
        const editProduct = await Product.findByPk(products[i].id)
        await editProduct.update(products[i]);
        await editProduct.save();
      }
    }    
    res.send("productos actualizados")
  }
  catch(err){
    next(err);
  }
})      
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
module.exports = router;


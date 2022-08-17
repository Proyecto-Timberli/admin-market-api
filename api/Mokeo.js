const { Category, Product } = require('./src/db.js');
const  mokeo = async () => {

    const products = [
      {name: "alfajor simple",make:"jorgito",amount:"25gr",price:50,buyprice:39,description:"alfajor con relleno de dulce de leche"},
      {name: "chupetin mr.pop",make:"arcor",amount:"10gr",price:30,buyprice:21,description:"chupetin"},
      {name: "chocolate block",make:"arcor",amount:"25gr",price:150,buyprice:15,description:"chocolate con mani"},
      {name: "coca-cola",make:"coca-cola",amount:"1lts",price:200,buyprice:140,description:"gaseosa sabor cola"},
      {name: "vino tinto",make:"toro viejo",amount:"1lts",price:200,buyprice:140,description:"vino tinto"},
      {name: "manaos",make:"manaos",amount:"2.25lts",price:150,buyprice:120,description:"gaseosa"},
      {name: "fanta",make:"coca-cola",amount:"1lts",price:200,buyprice:140,description:"gaseosa sabor naranja"},
      {name: "sprite",make:"coca-cola",amount:"1lts",price:20,buyprice:140,description:"gaseosa sabor lima-limon"},
      {name: "aquarius",make:"coca-cola",amount:"1lts",price:200,buyprice:140,description:"jugo de frutas"},
      {name: "pure de tomate",make:"la huerta",amount:"250cc",price:100,buyprice:75,description:"pure de tomate"},
      {name: "aceite de maiz",make:"cañuelas",amount:"1lts",price:400,buyprice:320,description:"aceite vegetal"},
      {name: "aceite de mescla",make:"cocinero",amount:"1lts",price:400,buyprice:320,description:"aceite vegetal"},
      {name: "harina 0000",make:"cañuelas",amount:"1kg",price:180,buyprice:160,description:"harina 0000"},
      {name: "jabon de tocador",make:"dove",amount:"1",price:180,buyprice:160,description:"jabon de tocador"},
      {name: "shampo",make:"clear",amount:"no me acuerdo",price:380,buyprice:320,description:"shampo"},
      {name: "acondicionador",make:"clear",amount:"no me acuerdo",price:380,buyprice:320,description:"acondicionador",}
    ]
    const categorias = [{name:"limpieza"},{name:"bebidas"},{name:"kiosco"},{name:"varios"}]
    for(var i = 0; i < categorias.length; i++){
        const newCategory = await Category.create(categorias[i])
    }
    
    for(var i = 0; i < products.length; i++){
        const newProduct = await Product.create(products[i])
        await newProduct.addCategory(1)
    }

}
module.exports = mokeo
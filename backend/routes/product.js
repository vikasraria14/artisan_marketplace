var express = require("express");
var router = express.Router();
const { handleError, getProduct } = require("../utils");
var { products } = require("../db");
const {getProductsBySeller,getProductById,getAllProducts, getProductsByCategory, updateCategoryTable, updateProductCostById} = require('../database/products');
router.get("/getProductsBySeller", async (req, res) => {
  console.log(
    `Request received for retrieving product with id1: ${"qwertyu"}`
  );
  try {
    const product = await getProductsBySeller(req.query.sellerId);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json();
    }
  } catch (error) {
    handleError(res, error);
  }
});
router.get("/", async(req, res) => {
  console.log("Request received for retrieving products list");
  // return res.status(200).json({done:"Done"});
  const category= req.query.category
  
  try{
    let docs
    if(category!=="undefined")
    {
      console.log("not undefined", category)
       docs= await getProductsByCategory(category)
       
    }
    else
    {
      console.log(" undefined", category)
      docs= await getAllProducts()
    }
    
    return res.status(200).json(docs);
  } 
  catch(err)
  {
    return res.status(400).send(err.message)
  }
    
  
});

router.post("/updateCost", async(req, res) => {
  try{
    console.log("upadae cost",req.body.id, req.body.cost, req.body.quantity )
    await updateProductCostById(req.body.id, req.body.cost, req.body.quantity)
  await updateCategoryTable(req.body.category, req.body.name, req.body.cost)
  let docs= await getAllProducts()


return res.status(200).json(docs);
  }
  catch(err)
  {
    res.status(400).send({data:err.message})
  }
  

})
// /search?value=
router.get("/search", (req, res) => {
  console.log("Request received for searching ", req.query.value);

  //Creating a RegEx to search
  const searchRegex = new RegExp(req.query.value.replace(/['"]+/g, ""), "i");

  products.find(
    { $or: [{ name: searchRegex }, { category: searchRegex }] },
    (err, docs) => {
      if (err) {
        return handleError(res, err);
      }

      if (docs.length) {
        return res.status(200).json(docs);
      } else {
        return res.status(404).json([]);
      }
    }
  );
});

// router.get("/:id", async (req, res) => {
//   console.log(
//     `Request received for retrieving product with id3: ${req.params.id}`
//   );
//   try {
//     const product = await getProduct(req.params.id);
//     if (product) {
//       return res.status(200).json(product);
//     } else {
//       return res.status(404).json();
//     }
//   } catch (error) {
//     handleError(res, error);
//   }
// });
router.get("/allProducts", async (req, res) => {
  console.log(
    `Request received for retrieving product with id2: ${req.params.id}`
  );
  try {
    const product = await getProduct(req.params.id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json();
    }
  } catch (error) {
    handleError(res, error);
  }
});
router.get("/getProductById", async (req, res) => {
  console.log(
    `Request received for retrieving product with id1: ${"qwertyu"}`
  );
  try {
    const product = await getProductById(req.query.id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json();
    }
  } catch (error) {
    handleError(res, error);
  }
});

module.exports = router;

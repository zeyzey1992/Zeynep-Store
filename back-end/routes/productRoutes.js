import express from "express";

const router = express.Router();

router.get("/", async (req, res) =>{
    try{
        const response = await fetch("https://dummyjson.com/products");

        const products = await response.json();

        res.json(products);

    }catch(error){
        console.log(error);

        res.status(500).json({
            message:" Error fetching products"
        });
    }
});

export default router;
import { dbconnection } from "../../../util/mongo"
import Product from "../../../models/Product"
export default async function handler(req, res) {
   const {method}=req
   dbconnection()
   if(method==="GET"){
    try {
        const product=await Product.find();   
        res.status(200).json(product)     
    } catch (error) {
        res.status(500).json(error)
    }
    
   }
   if(method==="POST"){
    try {
        // req.body
        const product = await Product.create(req.body)
        res.status(201).json({product})
    } catch (error) {
        res.status(500).json(error)
    }
   }

  }
  
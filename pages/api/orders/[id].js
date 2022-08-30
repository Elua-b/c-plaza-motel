import { dbconnection } from "../../../util/mongo";
import Order from "../../../models/Orders";
// import Orders from "../../orders/[id]";
const handler=async(req,res)=>{
    const {method,query:{id}}=req;
    if(method==="GET"){
        try {
            const order=await Order.findById(id)
            res.status(200).json(order)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    if (method === "PUT") {
        try {
          // req.body
          const order = await Order.findByIdAndUpdate(id,req.body,{
            new:true
          });
          res.status(201).json({ order });  
        } catch (error) {
          res.status(500).json(error);
        }
      }
    if(method==="DELETE"){}

}
export default handler
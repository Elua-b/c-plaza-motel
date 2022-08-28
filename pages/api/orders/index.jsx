import { dbconnection } from "../../../util/mongo";
import Order from "../../../models/Order";

const handler=async(req,res)=>{
    const {method}=req;
    await dbconnection();
    if(method==="GET"){
        try {
            const orders=await Order.find()
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json(error)
        }
    }
    if(method==="POST"){
        try {
            const orders=await Order.find(req.body)
            res.status(201).json(orders);
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
export default handler
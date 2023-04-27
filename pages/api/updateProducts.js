// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ConnectDB from "../../middleware/mongooes.js";
import Product from "../../models/Product.js";
const  handler= async (req, res)=> {
if(req.method == "POST"){
  for(let i=0;i<req.body.length;i++){
      await Product.findByIdAndUpdate(req.body[i]._id,req.body[i]);
  }
    res.status(200).send({mesaage:"Updated"})
}
else{
  res.status(400).send({error:"Not Implemented"})
}

}
  
  export default ConnectDB(handler)
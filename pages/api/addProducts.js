// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ConnectDB from "../../middleware/mongooes.js";
import Product from "../../models/Product.js";
const  handler= async (req, res)=> {
if(req.method == "POST"){
  for(let i=0;i<req.body.length;i++){
    let p=new Product({
      title:req.body[i].title,
    slug:req.body[i].slug,
    desc:req.body[i].desc,
    image:req.body[i].image,
    category:req.body[i].category,
    color:req.body[i].color,
    price:req.body[i].price,
    AvailQty:req.body[i].AvailQty
    });

 await p.save();
  }
  res.status(200).send({mesaage:"Added successfully"})


}else{
  res.status(400).send({error:"Not Implemented"})
}

}
  
  export default ConnectDB(handler)
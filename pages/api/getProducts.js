// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ConnectDB from "../../middleware/mongooes.js";
import Product from "../../models/Product.js";
const handler = async (req, res) => {
    let products = await Product.find();
    res.send({ products });

    
   };
  



  export default ConnectDB(handler)
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { use } from "react";
import ConnectDB from "../../middleware/mongooes.js";
import User from "../../models/User.js";
const handler = async (req, res) => {
    if (req.method == "POST") {
        let u=new User(req.body);
         await u.save();
        res.status(200).send({ mesaage: "Added successfully" })
    } else {
        res.status(400).send({ error: "Not Implemented" })
    }
}

export default ConnectDB(handler)
import bcrypt from 'bcrypt';
import User from "../../models/User.js";
import ConnectDB from "../../middleware/mongooes.js";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;

      // Find user by email
      const u = await User.findOne({ email });
      // If user not found
      if (!u) {
         res.status(401).json({ message: 'Does not exist',email:email });
      }

      // Compare password
      if(!password==u.password){
        return res.status(401).json({ message: 'Invalid credentials:Password' });
      }
      // const isMatch = await bcrypt.compare(password, u.password);
      // if (!isMatch) {
      //   return res.status(401).json({ message: 'Invalid credentials:Password' });
      // }

      // If user found and password is correct, return user
      res.json(u);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error!hahaha');
    }
  }
};

export default ConnectDB(handler);

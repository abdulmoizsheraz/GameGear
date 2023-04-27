import mongoose from 'mongoose';

const ConnectDB = handler => async (req, res) => {
  if (mongoose.connection.readyState) {
    return handler(req, res);
  }
  await mongoose.connect(process.env.MONGO_URI);
  return handler(req, res);
};

export default ConnectDB;

import mongoose from 'mongoose';

// main connection func
const connectMongoDb= async () => {
  // connection string
  const connection_str = process.env.MONGODB_CONNECTION_URL!;
  try {
    await mongoose.connect(connection_str);
    console.log('db connected');
    Promise.resolve();
  } catch (error) {console.log(error);}
};

export default connectMongoDb;
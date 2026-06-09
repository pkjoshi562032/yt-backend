import mongoose from 'mongoose'

import { DB_NAME } from '../constants.js';


const connectDB = async () => {
  try{
      const connectionIstance = await mongoose.connect(process.env.MONGO_URI);
      console.log(`\n MongoDB connectd !! DB HOTS ${connectionIstance.connection.host} \n`);
  }catch(err){
    console.log('Error connecting to DB', err);
    process.exit(1);
  }
}

export default connectDB;



import dotenv from 'dotenv';
import connectDB from './db/index.js';
dotenv.config({
  path: './.env'
});


console.log(`port is ${process.env.PORT}`);

connectDB();
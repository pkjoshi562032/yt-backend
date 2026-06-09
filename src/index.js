import dotenv from 'dotenv';
import connectDB from './db/index.js';
dotenv.config({
  path: './.env'
});


// console.log(`port is ${process.env.PORT}`);

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
})
.catch((err) => {
  console.log('Mongo DB Connection Failed', err);
  process.exit(1);
});
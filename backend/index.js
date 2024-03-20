import express from 'express';
import dotenv from 'dotenv';
import connectToMongoDB from './db/connectToMongoDB.js';


dotenv.config();
const app = express();
app.use(express.json())
const port =process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(3000, () => {
    connectToMongoDB();
  console.log('Example app listening on port 3000!');
});
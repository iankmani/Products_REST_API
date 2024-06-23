import express from 'express'
import productsRouter from './Routes/products.route.js'
import pool from './db.config.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const port = 3000;
// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
// });
app.use(express.json());
app.use('/products', productsRouter)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});


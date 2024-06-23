import pool from "../db.config.js";

//GET ALL PRODUCTS

export const getAllProducts = async( req, res) => {
    try{
        const result = await pool.query('SELECT * FROM products');
        res.json(result.rows);
    } catch(err){
        res.status(500).json({error: err.message});
    }
};

//GET SINGLE PRODUCT BY ID

export const getSingleProductById = async (req, res) => {
    const { id } = req.params;
    try{
        const result = await pool.query(`SELECT * FROM products WHERE id = $1` , [id]);
        if(result.rows.length === 0){
            res.status(404).json({error: ' Client ERROR: Product not found'});
        }
        res.json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
    }  
;

//CREATE PRODUCTS 
export const createProduct = async (req, res) => {
    const { productThumbnail, productTitle, productDescription, productCost, onOffer } = req.body;
    try{
        const result = await pool.query('INSERT INTO products (productThumbnail, productTitle, productDescription, productCost, onOffer) VALUES ($1, $2, $3, $4 , $5) RETURNING *', [productThumbnail, productTitle, productDescription, productCost, onOffer]);
        res.status(201).json(result.rows[0]);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
      }
};
//UPDATING A PRODUCT
export const updateProduct =  async (req, res) => {
    const { id } = req.params;
    const { productThumbnail, productTitle, productDescription, productCost, onOffer } = req.body;
    try {
      const result = await pool.query(
        'UPDATE products SET productThumbnail = $1, productTitle = $2, productDescription = $3, productCost = $4, onOffer = $5 WHERE id = $6 RETURNING *',
        [productThumbnail, productTitle, productDescription, productCost, onOffer, id]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

//DELETING A PRODUCT

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json({ message: 'Product deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


const express = require('express');
const router = express.Router();
const product = require('../controllers/Product')

router.get('/', (req, res) => {
    res.render('upload');
});
router.get('/list', async(req, res) => {
    const resProduct = await product.getAll();

    res.render('listProduct', {response: { status: resProduct.status, products: resProduct.products}});
})
router.post('/save', async(req, res) => {
    const { title, price, thumbnail } = req.body;
    await product.createProduct(title, price, thumbnail);
    res.redirect('/products/list')
})
module.exports = router;
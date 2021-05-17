const { getOrders, createOrder } = require('../service/ordersService');
const { sendResponse } = require('../service/requestService');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/orders', async (req, res) => {
    const data = await getOrders();
    return sendResponse(res, 200, null, {data});
});

router.post('/order', async (req, res) => {
    await createOrder(req.body);
    return sendResponse(res, 200);
});
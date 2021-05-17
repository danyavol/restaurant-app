const ordersCollection = require('../database/database')('orders');

module.exports.createOrder = async function (orderData) {
    const { tableId, fromTime, toTime, customerName, phoneNumber } = orderData;
    return await ordersCollection.insertOne({ tableId, fromTime, toTime, customerName, phoneNumber });
}

module.exports.getOrders = async function () {
    return await ordersCollection.find(null, true);
}
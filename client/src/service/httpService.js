const axios = require('axios');
const baseUrl = process.env.VUE_APP_SERVER_URL;

module.exports.getConfig = async function() {
    const response = await axios.get( baseUrl + 'tables-config' );
    return response.data.data;
}

module.exports.getOrders = async function() {
    const response = await axios.get( baseUrl + 'orders' );
    return response.data.data;
}

module.exports.createOrder = async function(order) {
   await axios.post( baseUrl + 'orders', order );
}
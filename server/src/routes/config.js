const { sendResponse } = require('../service/requestService');
const { getTablesConfig } = require('../service/configService');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/tables-config', async (req, res) => {
    const data = await getTablesConfig();
    return sendResponse(res, 200, null, {data});
});
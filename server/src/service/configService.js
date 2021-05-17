const configCollection = require('../database/database')('config');

module.exports.getTablesConfig = async function () {
    const data = await configCollection.find(null, true);
    if (!data || data.length == 0) {
        await configCollection.insert(defaultConfig);
        return defaultConfig;
    }

    return data;
}

const defaultConfig = [
    { id: 1, seats: 2 },
    { id: 2, seats: 2 },
    { id: 3, seats: 3 },
    { id: 4, seats: 4 },
    { id: 5, seats: 4 },
    { id: 6, seats: 4 },
    { id: 7, seats: 6 },
    { id: 8, seats: 6 },
    { id: 9, seats: 6 },
    { id: 10, seats: 1 },
    { id: 11, seats: 1 },
    { id: 12, seats: 1 }
];
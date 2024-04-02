const items = require('../elements/items.js');

const getItemList = (req, res) => {
    res.json(items);
};



module.exports = getItemList;
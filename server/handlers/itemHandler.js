const db = require('./DBinfo');

const getItemList = (req, res) => {
    const query = "SELECT item.*, item_img.src, item_img.item_id FROM kurly.item LEFT JOIN kurly.item_img ON item.id = item_img.item_id;";
    db.query(query, (err, result)=>{
        res.send(result);
    })
};

module.exports = getItemList;
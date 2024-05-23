const db = require('./DBinfo');

const postCartItem = (req, res) => {
    const { nickname, item_id, num } = req.body;
    const query = "INSERT INTO kurly.cart (user_nickname, item_id, num) VALUES (?, ?, ?);";
    const params = [nickname, item_id, num];
    console.log(params);
    db.query(query, params, (err, result)=>{
        res.send(result);
    })
};

const getCartItem = (req, res) => {
    const query = "SELECT cart.*, item.* FROM kurly.cart LEFT JOIN kurly.item ON cart.item_id = item.id;"
    db.query(query, (err, result)=>{
        res.send(result);
    })
}

module.exports = { postCartItem, getCartItem };
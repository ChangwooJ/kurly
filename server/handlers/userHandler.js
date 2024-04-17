const db = require('./DBinfo');

const getUserList = (req, res) => {
    const query = "SELECT * FROM kurly.user;";
    db.query(query, (err, result)=>{
        res.send(result);
    })
};

module.exports = getUserList;
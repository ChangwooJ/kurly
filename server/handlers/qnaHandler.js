const db = require('./DBinfo');

const getQnaList = (req, res) => {
    const query = "SELECT qna.*, user.id, user.nickname FROM kurly.qna LEFT JOIN kurly.user ON qna.writer = user.id;";
    db.query(query, (err, result)=>{
        res.send(result);
    })
};

module.exports = getQnaList;
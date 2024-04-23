const db = require('./DBinfo');

const postSignupList = (req, res) => {
    const { user_id, user_pw, nickname, email } = req.body;
    const query = "INSERT INTO kurly.user (user_id, user_pw, nickname, email) VALUES (?, ?, ?, ?);";
    const params = [user_id, user_pw, nickname, email];
    db.query(query, params, (err, result)=>{
        res.send(result);
    })
};

module.exports = postSignupList;
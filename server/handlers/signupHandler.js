const db = require('./DBinfo');

//회원 정보 db추가
const postSignupList = (req, res) => {
    const { user_id, user_pw, nickname, email } = req.body;
    const query = "INSERT INTO kurly.user (user_id, user_pw, nickname, email) VALUES (?, ?, ?, ?);";
    const params = [user_id, user_pw, nickname, email];
    db.query(query, params, (err, result)=>{
        res.send(result);
    })
};

module.exports = postSignupList;
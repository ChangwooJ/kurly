const db = require('./DBinfo');

const postLoginList = (req, res) => {
    const { user_id, user_pw } = req.body;

    const query = "SELECT * FROM kurly.user WHERE user_id = ? AND user_pw =?";
    const params = [user_id, user_pw];
    
    db.query(query, params, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            req.session.is_logined = true;
            req.session.ss_nickname = result[0].nickname;

            req.session.save(function () {
                res.json({ redirectPath: '/', ss_nickname: result[0].nickname });
            });
        }
    });
};

module.exports = postLoginList;
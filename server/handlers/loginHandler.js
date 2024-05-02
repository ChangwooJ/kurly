const db = require('./DBinfo');

db.connect((err) => {
    if (err) {
      console.error('MySQL 연결 오류:', err);
      throw err;
    }
    console.log('MySQL 데이터베이스에 연결되었습니다.');
});

const query = 'SELECT * FROM kurly.user';

db.query(query, (error, results) => {
    if (error) {
      console.error('쿼리 오류:', error);
      throw error;
    }
}); //여기서 주어진 result값으로 아래에서 조건검색 진행. 아마도 post방식인게 문제인듯하다.

const getLoginList = (req, res) => {
    const { user_id, user_pw } = req.body;
    const query = "SELECT user_id, user_pw, nickname FROM kurly.user WHERE user_id = ? and user_pw = ?";
    const params = [ user_id, user_pw ];
    console.log("!");
    db.query(query, params, (err, result)=>{
        if(result.length !== 0){
            console.log("ok");
            req.session.is_logined = true;
            req.session.ss_id = user_id;

            req.session.save(function () {
                res.redirect(`/`);
            });
        }
        else console.log("no");
    })
};

db.end();

module.exports = getLoginList;
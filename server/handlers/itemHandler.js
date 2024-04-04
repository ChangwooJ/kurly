const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "kurly",
    password: "111111",
    database: "post"
});

const getItemList = (req, res) => {
    const query = "SELECT item.*, item_img.src, item_img.item_id FROM kurly.item LEFT JOIN kurly.item_img ON item.id = item_img.item_id;";
    db.query(query, (err, result)=>{
        res.send(result);
    })
};

module.exports = getItemList;

//이거 이제 만들어진 db에서 불러올 수 있게 변경
//이미지도 연결해주어야함
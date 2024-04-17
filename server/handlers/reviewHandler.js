const db = require('./DBinfo');

const getReviewList = (req, res) => {
    const query = "SELECT reviews.*, reviews_img.src, reviews_img.review_id, user.id, user.nickname FROM kurly.reviews LEFT JOIN kurly.reviews_img ON reviews.id = reviews_img.review_id LEFT JOIN kurly.user ON reviews.user_id = user.id;";
    db.query(query, (err, result)=>{
        res.send(result);
    })
};

module.exports = getReviewList;
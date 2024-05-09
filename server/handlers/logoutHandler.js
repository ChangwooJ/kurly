const postLogout = (req, res) => {
    req.session.destroy(err => {
        if(err){throw err;}
        res.json({ redirectPath: '/' });
    })
};

module.exports = postLogout;
const db = require('./DBinfo');
const nodemailer = require('nodemailer');

//메일 인증
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: "",
        pass: "",
    },
});

const postEmail = (req, res) => {
    const email = req.body.email;
    const mailCode = Math.random().toString(36).substring(2);

    const deleteQuery = "DELETE FROM kurly.mailCode WHERE email = ?;"

    db.query(deleteQuery, [email], (err, result) => {
        const insertQuery = "INSERT INTO kurly.mailCode (email, code) VALUES (?, ?);";

        db.query(insertQuery, [email,mailCode], (err, result) => {
            const mailOptions = {
                from: "wjdckddn20@gmail.com",
                to: email,
                subject: '이메일 인증 테스트',
                text: `${mailCode}`,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error("X", error);
                    res.status(500).send("이메일 전송 실패");
                }
                else {
                    console.log("OK", info.response);
                    res.status(200).send("이메일 전송 성공");
                }
            });
        })
    });
    //서버에서 응답을 주지 않으면 클라이언트가 대기 상태에 빠져 에러가 날 수 있음.
}

const postCode = (req, res) => {
    const { code, email } = req.body;
    let mail_code = '';
    let query = "SELECT code FROM kurly.mailCode WHERE email = ?;";
    db.query(query, [email], (err, result) => {
        if (result.length === 0) {
            return res.status(400).send('잘못된 인증 정보');
        }
        mail_code = result[0].code;
        console.log('Stored code:', mail_code);
        if (mail_code === code) {
            query = "DELETE FROM kurly.mailCode WHERE email = ?;"
            db.query(query, [email], (err, result) => {
                res.status(200).send('인증 성공');
            });
        } else {
            res.status(400).send('잘못된 인증 정보');
        }
    })

}

module.exports = { postEmail, postCode };
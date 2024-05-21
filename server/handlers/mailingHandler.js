const nodemailer = require('nodemailer');

//메일 인증
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: "***",
        pass: "***",//git용 숨김처리
    },
});

const mailCodes = {}; //인증 코드 확인 작업을 할때 서버가 재시작되기 때문에 값이 날라감. db등에 저장필요해보임

const postEmail = (req, res) => {
    const email = req.body.email;

    console.log(email);

    const mailCode = Math.random().toString(36).substring(2);
    mailCodes[email] = mailCode;
    console.log('Stored mail code:', mailCodes[email]);

    const mailOptions = {
        from: "wjdckddn20@gmail.com",
        to: email,
        subject: '이메일 인증 테스트',
        text: `${mailCode}`,
    };

    transporter.sendMail(mailOptions,(error, info) => {
        if(error) {
            console.error("X",error);
            res.status(500).send("이메일 전송 실패");
        }
        else {
            console.log("OK",info.response);
            res.status(200).send("이메일 전송 성공");
        }
    });
    //서버에서 응답을 주지 않으면 클라이언트가 대기 상태에 빠져 에러가 날 수 있음.
}

const postCode = (req, res) => {
    const { code, email } = req.body;

    // console.log('Received code:', code);
    // console.log('Received email:', email);
    // console.log('Stored code:', mailCodes[email]);

    if(mailCodes[email] === code){
        delete mailCodes[email];
        res.status(200).send('인증 성공');
    } else {
        res.status(400).send('잘못된 인증 정보');
    }
}

module.exports = {postEmail, postCode};
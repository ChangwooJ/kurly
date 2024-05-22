const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8000;
const router = require('./router/routes');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const corsOptions = {
    origin: 'http://localhost:3000', // 클라이언트 도메인
    credentials: true, // 인증 정보 포함 허용
  };

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(session({
    secret: 'kurly-jung',
    resave: false,
    saveUninitialized: true,
    store: new FileStore(),
    cookie: {
        maxAge: 1000*60*10,
    },
}));

app.use('/api', router);

app.listen(PORT,()=>console.log(`port: ${PORT}`));
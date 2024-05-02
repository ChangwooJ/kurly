const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const PORT = process.env.PORT || 8000;
const router = require('./router/routes');

app.use(cors());
app.use(express.json());

app.use(session({
    secret: 'kurly-jung',
    resave: false,
    saveUninitialized: false,
    store: new FileStore(),
    cookie: {
        domain: 'localhost',
        path: '/',
        maxAge: 24 * 6 * 60 * 10000,
        sameSite: 'none',
        httpOnly: true,
        secure: true,
      },
}));

app.use('/api', router);

app.listen(PORT,()=>console.log(`port: ${PORT}`));
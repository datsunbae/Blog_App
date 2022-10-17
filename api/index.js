const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const port = 5000;
const app = express();

const authRouter = require('./routes/authRouter');

dotenv.config();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRouter);

app.listen(port, () => {
    console.log("Server is running ...");
});

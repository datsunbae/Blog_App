const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

const port = 5000;
const app = express();

dotenv.config();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

routes(app);

app.listen(port, () => {
    console.log("Server is running ...");
});

const express = require('express');
const dotenv = require('dotenv');
const port = 5000;
const app = express();

dotenv.config();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res, next) => {
    res.send("hello word");
});

app.listen(port, () => {
    console.log("Server is running ...");
});

const authRouter = require('./authRouter');
const postRouter = require('./postRouter');

const router = (app) => {
    app.use('/auth', authRouter);
    app.use('/posts', postRouter);
}

module.exports = router;
const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authController = {
    register: (req, res) => {
        try{
            const q = 'SELECT * FROM user WHERE email = ? OR username = ?';
            db.query(q, [req.body.email, req.body.username], (err, result) => {
                if(err){
                    return res.status(500).json(err);
                }
                console.log(result)
                if(result.length){
                    return res.status(400).json('User already exists!');
                }
    
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(req.body.password, salt);
    
                const q = 'INSERT INTO user(`username`, `email`, `password`) VALUES (?)';
    
                const values = [
                    req.body.username,
                    req.body.email,
                    hash
                ]
                
                db.query(q, [values], (err, result) => {
                    if(err){
                        return res.status(500).json(err);
                    }
                    return res.status(200).json('User has been created.');
                })
    
            })
        }
        catch(err) {
            return res.status(500).json(err);
        }

    },

    login: (req, res, next) => {
        try {
            const q = 'SELECT * FROM user WHERE username = ?';
            db.query(q, [req.body.username], async (err, result) => {
                if(err) {
                    return res.status(500).json(err);
                }
                if(result.length === 0) {
                    return res.status(404).json("User not found");
                }
                const hash = result[0].password;
                const isPasswordCorrect = await bcrypt.compareSync(req.body.password, hash);
                if(!isPasswordCorrect) {
                    return res.status(400).json("Wrong password!");
                }

                if(result.length > 0 && isPasswordCorrect) {
                    const user = result[0];
                    const {password, ...other} = user;
                    const token = authController.generateAccessToken(other);
                    res.cookie('access_token', token, {
                        httpOnly: true,
                        sameSite: 'strict',
                        scure: false
                    }).status(200).json(other);
                }

            })
        }
        catch(err) {
            return res.status(500).json(err);
        }


    },
    generateAccessToken: (user) => {
        return jwt.sign({
            id: user.id
        },
        process.env.JWT_ACCESS_TOKEN, 
        {
            expiresIn: "2m"
        })
    }
}

module.exports = authController;
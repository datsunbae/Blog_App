const db = require('../db');
const bcrypt = require('bcryptjs');

const authController = {
    register: (req, res) => {
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
}

module.exports = authController;
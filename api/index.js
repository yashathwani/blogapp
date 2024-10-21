const express = require('express')
const app = express()
const port = 4000
const bcrypt = require('bcryptjs')
const mongoose=require('mongoose')
const User=require('./models/User')
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken')


const secret = 'fglksfdfngglkgsfdgfdgd'
const fs = require('fs')
app.use(express.json());

mongoose.connect('')

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({
            username,
            password:bcrypt.hashSync(password, salt)
        })
        res.json(userDoc)
    }
    catch (error) {
        res.status(400).json(error)
    }

})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    const passOk = bcrypt.compareSync(password, userDoc.password);

    if (passOk) {
        console.log('the credential is correct');
        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err)
            {
                throw err;
            }
            res.cookie('token', token).json({
                id: userDoc._id,
                username,
            });

        })
    }
    else {
        res.status(400).json('wrong credentials')
    }
})







app.listen(port, () => {
    console.log('the server is running on the port ' + port)
});




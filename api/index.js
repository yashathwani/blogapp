const express = require('express')
const app = express()
const port = 4000
const bcrypt = require('bcryptjs')
const mongoose=require('mongoose')
const User=require('./models/User')
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken')
const cors = require('cors')
const cookieparser = require('cookie-parser')
const Post = require('./models/Post')
const secret = 'fglksfdfngglkgsfdgfdgd'
const fs = require('fs')
const multer = require('multer')
const uploadMiddleware=multer({dest:'uploads/'})
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }))
app.use(cookieparser());
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

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok')
});
app.get('/profile', (req, res) => {
    const { token } = req.cookies;

    // Check if the token is available in cookies
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    // Verify the JWT token
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) {
            console.error('JWT verification failed:', err);
            return res.status(403).json({ error: 'Token verification failed' });
        }

        // Send the verified user info if everything is fine
        res.json(info);
    });
});

app.post('/post', uploadMiddleware.single('cover'), async (req, res) => {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);

    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ error: 'JWT token missing' });
    }

    jwt.verify(token, secret, {}, async (error, info) => {
        if (error) {
            return res.status(403).json({ error: 'Token verification failed' });
        }

        const { title, summary, content } = req.body;
        const postDoc = await Post.create({
            title,
            summary,
            content,
            cover: newPath,
            author: info.id
        });

        res.json(postDoc);
    });
});


app.get('/post', async (req, res) => {
    res.json(
        await Post.find().populate('author',['username']).sort({ createdAt: -1 }).limit(20)
    )
})




app.listen(port, () => {
    console.log('the server is running on the port ' + port)
});




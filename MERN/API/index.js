const express = require('express')
 const mongoose = require('mongoose')
   const User = require('./models/user.model')
   const article = require('./models/article.model')

 const app = express()

 app.use((req, res) => {
    res.send('Hello from nodejs')
 })

 app.listen(5000, async() => {;
    console.log('Server stated at http://localhost:5000');
    console.log('Press Ctrl + c to stop');
    await mongoose.connect('mongodb://localhost:27017/mern-vs4')
    console.log('MongoDB connected');

    const users = await User.find()
    console.log('users',users);

    const article = await Article.find()
    console.log('article',article);
    
    
    
 })
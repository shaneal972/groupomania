const express = require('express');
const path = require('path');

// Création de l'application express
const app = express();

// Sécurisation attaque de brute force

// Sécurisation de quelques failles de sécurité


// Sécurisation de l'attaque brute-force

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');

//Connection à la base de donnée Mysql

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use('/api/auth', userRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);

module.exports = app;

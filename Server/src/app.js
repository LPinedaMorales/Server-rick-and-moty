const express = require('express');
const app = express();

const rutas = require('./routes/index');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });
 
 app.use(express.json());
 app.use("/rickandmorty", rutas);
 
 app.get("/health-check", (req, res) => {
    res.send("Working");
  });

  module.exports = app;
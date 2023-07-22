const express = require('express');
const {getCharById} = require("../controllers/getCharById");
const {login} = require ("../controllers/login");
const {postFav, deleteFav} = require("../controllers/handleFavorites")


const rutas = express.Router();

rutas.get("/character/:id", getCharById);
rutas.get("/login" , login);
rutas.post("/fav", postFav);
rutas.delete("/fav/:id" , deleteFav);

module.exports = rutas;

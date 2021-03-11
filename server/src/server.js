/*
** EPITECH PROJECT, 2020
** Dashboard
** File description:
** server.js
*/

const express = require("express");
const router = require(__dirname + '/router');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('./dist/client/'))
app.use(router);

app.listen(port, () => console.log('Server listening on port ' + port));

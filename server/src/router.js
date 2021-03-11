/*
** EPITECH PROJECT, 2020
** Dashboard
** File description:
** router.js
*/

const express = require('express');
const path = require('path');

const router = express.Router();

router.use((req, res) => {
    res.sendFile(path.resolve('dist/client/index.html'));
});

module.exports = router;

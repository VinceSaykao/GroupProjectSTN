const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// This will GET all profile information for a specific profile user 
router.get('/:id', (req, res) => {
    if (req.isAuthetnicated()) {
        pool
            .query(``)
            .then((results) => res.send(results.rows))
            .catch((error) => {
                console.log('Error in profile router GET', error);
                res.sendStatus(500);
            })
    }
});

// This will POST for when a new user registers an account
router.post('/', (req, res) => {
    let queryInserts = ``;
    if (req.isAuthenticated) {
        pool
            .
    }
});

module.exports = router;

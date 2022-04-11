const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// This will GET all profile information for a specific profile user 
router.get('/', (req, res) => {

    let id = req.params.id;

    if (req.isAuthenticated()) {
        pool
            .query(`select * from users;`)
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
            .query(queryText, queryInserts)
            .then((results) => {
            })
            .catch((error) => {
                console.log('Error in profile router POST', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

// update for specific user profile
router.put('/:id', (req, res) => {
    const queryText = ``;
    
    const queryValues = [];
    
    pool.query(queryText, queryValues).then(() => {
        res.sendStatus(200)
    }).catch((error) => {
        console.log('Error updating specific profile user', error);
        res.sendStatus(500);
    })
});

module.exports = router;

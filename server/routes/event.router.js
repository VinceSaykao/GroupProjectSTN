const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET all events' information
router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        pool
            .query(``)
            .then((results) => res.send(result.rows))
            .catch((error) => {
                console.log('Error in GET for all events information', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403); // Forbidden
    };
});

// GET specific event information
router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        pool
            .query(``)
            .then((results) => res.send(result.rows))
            .catch((error) => {
                console.log('Error in GET for all events information', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403); // Forbidden
    };
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;

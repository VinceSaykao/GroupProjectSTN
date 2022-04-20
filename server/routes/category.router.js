const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// --- Get All Categories ----------------------------------------
router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        pool.query('SELECT * FROM categories ORDER BY name;')
            .then(result => res.send(result.rows))
            .catch(error => {
                console.log('category GET error:', error);
                res.sendStatus(500);
            })
    }
});

module.exports = router;

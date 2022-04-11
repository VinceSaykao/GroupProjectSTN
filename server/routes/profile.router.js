const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// CREATE TABLE "user" (
//     "id" SERIAL PRIMARY KEY,
//     "username" VARCHAR (100),
//     "password" VARCHAR (200),
//     "active" BOOLEAN DEFAULT TRUE,
//     "access_level" int,
//     "org_id" int,
//     "first_name" VARCHAR (50),
//     "last_name" VARCHAR (50),
//     "bio" VARCHAR (500),
//     "email" VARCHAR (50),
//     "image" VARCHAR (1000)
//     );





// This will GET all profile information for a specific profile user 
router.get('/:id', (req, res) => {

    let id = req.params.id;

    if (req.isAuthenticated()) {
        pool
            .query(`select * from "user" where "id" = $1;`, [id])
            .then((results) => res.send(results.rows))
            .catch((error) => {
                console.log('Error in profile router GET', error);
                res.sendStatus(500);
            })
    }
});

// This will POST for when a new user registers an account
router.post('/', (req, res) => {
    let queryText = `
    insert into "user" ("access_level","first_name","last_name","bio","email","image") values
    ($1,$2,$3,$4,$5,$6);
    `;

    let queryInserts = [req.body.access_level,req.body.first_name,req.body.last_name,req.body.bio,req.body.email,req.body.image];
    if (req.isAuthenticated) {
        pool
            .query(queryText, queryInserts)
            .then((results) => {
                res.sendStatus(200);
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
    const queryText = `
    update "user" set
    "bio" = $1,
    "email" = $2,
    "image" = $3
    where "id" = $4;
    `;

    const queryValues = [req.body.bio, req.body.email, req.body.image,req.params.id];

    pool.query(queryText, queryValues).then(() => {
        res.sendStatus(200)
    }).catch((error) => {
        console.log('Error updating specific profile user', error);
        res.sendStatus(500);
    })
});

module.exports = router;

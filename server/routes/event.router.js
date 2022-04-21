const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// GET all events' information that are approved
router.get('/', (req, res) => {


    pool
        .query(` 
            select 
            events.id,
            events.org_id,
            events.category_id,
            events.status,
            events."name",
            events.description,
            TO_CHAR(start_date, 'Mon') AS "month",
            extract(
            day from start_date
            ) AS "day",
            to_char(start_date, 'Dy') AS "dayname",
            events.start_date,
            events.end_date,
            events.start_time,
            events.end_time,
            events.image,
            events.address1,
            events.address2,
            events.city,
            events.zip,
            events.state,
            events.email,
            events.phone,
            events.link,
            events.feedback, 
            organizations.name as "orgname"
            from events 
            join organizations
            on
            organizations.id = events.org_id
            where events.status = 'approved' AND end_date > NOW()
            order by start_date asc;
            `)
        .then((results) => res.send(results.rows))
        .catch((error) => {
            console.log('Error in GET for all events information', error);
            res.sendStatus(500);
        });
});

// GET specific event information
router.get('/:id', (req, res) => {

    let id = req.params.id;


    pool
        .query(`select 
            id,
            org_id,
            category_id,
            status,
            "name",
            description,
            TO_CHAR(start_date, 'Mon') AS "month",
            extract(
            day from start_date
            ) AS "day",
            to_char(start_date, 'Dy') AS "dayname",
            TO_CHAR(start_date, 'YYYY-MM-DD') AS start_date,
            TO_CHAR(end_date, 'YYYY-MM-DD') AS end_date,
            start_time,
            end_time,
            image,
            address1,
            address2,
            city,
            zip,
            state,
            events.email,
            events.phone,
            events.link,
            feedback    
            from events where id = $1;`, [id])
        .then((results) => {
            res.send(results.rows)
        })
        .catch((error) => {
            console.log('Error in GET for specific event information', error);
            res.sendStatus(500);
        });

});

// GET all pending admin event information
router.get('/admin/pending', (req, res) => {

    if (req.isAuthenticated()) {
        pool
            .query(`select 
            events.id,
            events.org_id,
            events.category_id,
            events.status,
            events."name",
            events.description,
            TO_CHAR(start_date, 'Mon') AS "month",
            extract(
            day from start_date
            ) AS "day",
            to_char(start_date, 'Dy') AS "dayname",
            events.start_time,
            events.end_time,
            events.image,
            events.address1,
            events.address2,
            events.city,
            events.zip,
            events. state,
            events.feedback, 
            organizations.name as "orgname"
            from events 
            join organizations
            on
            organizations.id = events.org_id
            where events.status = 'pending'
            order by start_date asc;`)
            .then((results) => res.send(results.rows))
            .catch((error) => {
                console.log('Error in GET for admin pending event information', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403); // Forbidden
    };
});


// GET profile user specific event by profile.id
router.get('/organization/:id', (req, res) => {

    let id = req.params.id;

    if (req.isAuthenticated()) {
        pool
            .query(`select * from events where org_id = $1;`, [id])
            .then((results) => res.send(results.rows))
            .catch((error) => {
                console.log('Error in GET for specific organization event information', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403); // Forbidden
    };
});



// Will POST an Event to database as *pending status event* when an organization fills out their Event register form. 
router.post('/', (req, res) => {

    console.log('req.body', req.body);
    console.log('req.user.org_id', req.user.org_id);

    const queryText = `
        INSERT INTO "events" (
            "org_id",
            "category_id",
            "name",
            "description",
            "status",
            "start_date",
            "end_date",
            "start_time",
            "end_time",
            "image",
            "address1",
            "address2",
            "city",
            "zip",
            "state",
            "email",
            "phone",
            "link"
        ) 
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18);
    `;

    let queryInserts = [
        req.body.org_id,
        req.body.category_id,
        req.body.name,
        req.body.description,
        req.body.status,
        req.body.start_date,
        req.body.end_date,
        req.body.start_time,
        req.body.end_time,
        req.body.image,
        req.body.address1,
        req.body.address2,
        req.body.city,
        req.body.zip,
        req.body.state,
        req.body.email,
        req.body.phone,
        req.body.link,
    ];
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

// update information for specific event
router.put('/:id', (req, res) => {
    const queryText = `
    update "events" set
    "org_id" = $1,
    "category_id" = $2,
    "status" = $3,
    "name" = $4,
    "description" = $5,
    "start_date" = $6,
    "end_date" = $7,
    "start_time" = $8,
    "end_time" = $9,
    "image" = $10,
    "address1" = $11,
    "address2" = $12,
    "city" = $13,
    "zip" = $14,
    "state" = $15,
    "phone" = $16,
    "email" = $17,
    "link" = $18,
    "feedback" = $19
    where "id" = $20
    ;
    `;

    const queryValues = [req.body.org_id, req.body.category_id, req.body.status, req.body.name,
    req.body.description, req.body.start_date, req.body.end_date, req.body.start_time, req.body.end_time,
    req.body.image, req.body.address1, req.body.address2, req.body.city, req.body.zip, req.body.state,
    req.body.phone, req.body.email, req.body.link, req.body.feedback, req.params.id];

    pool.query(queryText, queryValues).then(() => {
        res.sendStatus(200)
    }).catch((error) => {
        console.log('Error updating specific profile user', error);
        res.sendStatus(500);
    })
});

// delete a event by id
router.delete("/:id", (req, res) => {
    let queryText = `delete from events where id = $1;`;
    let queryInsert = req.params.id;

    if (req.isAuthenticated()) {
        pool
            .query(queryText, [queryInsert])
            .then((results) => {
                console.log("Success on delete events", results);
                res.sendStatus(200);
            })
            .catch((err) => {
                console.log("Error on delete events,", err);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

// Delete Favorite Event
router.delete("/delete/fave/:id/:eventid", (req, res) => {
    console.log('delete fav123', req.params.id,req.params.eventid);
    let queryText = `delete from fav_events where event_id = $1 AND user_id = $2;`;
    let queryInsert = [req.params.eventid, req.params.id]
    
    if (req.isAuthenticated()) {
        pool
            .query(queryText, queryInsert)
            .then((results) => {
                console.log("Success on delete fav_events", results);
                res.sendStatus(200);
            })
            .catch((err) => {
                console.log("Error on delete fav_events,", err);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});


module.exports = router;

const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// This will GET all profile information for a specific profile user

// router.get("/:id", (req, res) => {
router.get("/", (req, res) => {
  console.log("req.user.id= ", req.user.id);

  console.log("req.params= ", req.params.id);
  console.log("req.body= ", req.body);
  let id = req.user.id;

  if (req.isAuthenticated()) {
    pool
      .query(`select * from "user" where "id" = $1;`, [id])
      .then((results) => res.send(results.rows))
      .catch((error) => {
        console.log("Error in profile router GET", error);
        res.sendStatus(500);
      });
  }
});

//
router.get("/:id", (req, res) => {
  let id = req.user.id;

  if (req.isAuthenticated()) {
    pool
      .query(
        `select * 
    from events 
    join fav_events on fav_events.event_id = events.id
    join "user" 
    on "user".id = fav_events.user_id 
    where 
    fav_events.user_id = $1;`,
        [id]
      )
      .then((results) => res.send(results.rows))
      .catch((error) => {
        console.log("Error in profile router GET", error);
        res.sendStatus(500);
      });
  }
});

// This will POST for when a new user registers an account
router.post("/", (req, res) => {
  let queryText = `
    insert into "user" ("access_level","first_name","last_name","bio","email","image") values
    ($1,$2,$3,$4,$5,$6);
    `;

  let queryInserts = [
    req.body.access_level,
    req.body.first_name,
    req.body.last_name,
    req.body.bio,
    req.body.email,
    req.body.image,
  ];
  if (req.isAuthenticated) {
    pool
      .query(queryText, queryInserts)
      .then((results) => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log("Error in profile router POST", error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

// This POST is for the "SAVE" button that will favorite events
router.post("/", (req, res) => {
  let queryText = `
  insert into "fav_events" ("user_id", "event_id")
  values ($1, $2);  
  `;
  let queryInserts = [req.body.user_id, req.body.event_id];
  if (req.isAuthenticated) {
    pool.query(queryText, queryInserts).then((results) => {
      res.sendStatus(500);
    });
  } else {
    res.sendStatus(403);
  }
});

// update information for specific user profile
router.put("/:id", (req, res) => {
  console.log("req.body= ", req.body);
  console.log("params.id= ", req.params.id);
  const queryText = `
    update "user" set
    "first_name" = $1,
    "last_name" = $2,
    "bio" = $3,
    "email" = $4,
    "image" = $5
    WHERE "id" = $6;
    `;

  const queryValues = [
    req.body.first_name,
    req.body.last_name,
    req.body.bio,
    req.body.email,
    req.body.image,
    req.params.id,
  ];

  pool
    .query(queryText, queryValues)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error updating specific profile user", error);
      res.sendStatus(500);
    });
});

module.exports = router;

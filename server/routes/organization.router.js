const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Gets all the organizations from the database
 router.get('/', (req, res) => {
  const query = `SELECT *
    FROM organizations`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Getting all organizations', err);
      res.sendStatus(500);
    });
});

// Gets a specific organization or set organizations by their id
router.get('/organization/:id', (req, res) => {
  const id = req.params.id;

  const query = `SELECT *
    FROM organizations
    WHERE id = $1
    GROUP BY organizations.id;`;
  pool
    .query(query, [id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Getting organization details', err);
      res.sendStatus(500);
    });
});


/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

// Updates an organizations details but only those that belong to the current user
router.put('/edit/:id', (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const website = req.body.website;
  const twitter = req.body.twitter;
  const facebook = req.body.facebook;
  const instagram = req.body.instagram;
  const description = req.body.description;
  const image = req.body.image;
  const address1 = req.body.address1;
  const address2 = req.body.address2;
  const zip = req.body.zip;
  const state = req.body.state;
  const query = `
  UPDATE organizations 
  SET name = $1,
  email = $2,
  phone = $3,
  website = $4,
  twitter = $5,
  facebook = $6,
  instagram = $7,
  description = $8,
  image = $9,
  address1 = $10,
  address2 = $11,
  zip = $12,
  state = $13,
  WHERE user.id = $14;
  `;
  pool
    .query(query, [name, email, phone, website, twitter, facebook, instagram, description, image, address1, address2, zip, state, id ])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});



module.exports = router;

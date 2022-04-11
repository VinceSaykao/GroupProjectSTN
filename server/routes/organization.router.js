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
router.get('/:id', (req, res) => {
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

// Gets a specific organization or set organizations by the users id
// router.get('/user/:id', (req, res) => {
//   const id = req.params.id;

//   const query = `SELECT *
//   FROM "organizations"
//   JOIN "user" ON "user"."org_id" = "organizations"."id" 
//   WHERE "user"."id" = 1
//   GROUP BY "user"."id", "organizations"."id";`;
//   pool
//     .query(query, [id])
//     .then((result) => {
//       res.send(result.rows);
//     })
//     .catch((err) => {
//       console.log('ERROR: Getting users organizations', err);
//       res.sendStatus(500);
//     });
// });


// Posts a new organization to the website
router.post('/', (req, res) => {
  let newOrg = req.body;

  const values = [
    newOrg.name,
    newOrg.email,
    newOrg.phone,
    newOrg.website,
    newOrg.twitter,
    newOrg.facebook,
    newOrg.instagram,
    newOrg.description,
    newOrg.image,
    newOrg.address1,
    newOrg.address2,
    newOrg.zip,
    newOrg.state,
  ];

  let query = `
    INSERT INTO organizations (
    name,
    email,
    phone,
    website,
    twitter,
    facebook,
    instagram,
    description,
    image,
    address1,
    address2,
    zip,
    state
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13 );  
  `;

  pool
    .query(query, values)
    .then((result) => {
      console.log('New organization posted', result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error with new organization post', error);
      res.sendStatus(500);
    });
});

// Updates an organizations details but only those that belong to the current user
router.put('/edit/:id', (req, res) => {
  const org = req.body;

  values = [
    org.id,
    org.name,
    org.email,
    org.phone,
    org.website,
    org.twitter,
    org.facebook,
    org.instagram,
    org.description,
    org.image,
    org.address1,
    org.address2,
    org.zip,
    org.state,
    req.params.id,
  ];

  let query = `
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
    .query(query, values)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;

  let queryText = `DELETE FROM "organizations" WHERE "id" = $1;`;

  pool
    .query(queryText, [id])
    .then((result) => {
      console.log('Organization deleted');

      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Organization NOT deleted error', error);

      res.sendStatus(500);
    });
});

module.exports = router;

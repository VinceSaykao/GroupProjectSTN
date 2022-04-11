const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Gets all the organizations from the database
 router.get('/', (req, res) => {
  const query = `SELECT *
    FROM organizations
    GROUP BY organizations.id;`;
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

router.put('/edit/:id', (req, res) => {
  const id = req.params.id;
  const org_name = req.body.org_name;
  const org_location = req.body.org_location;
  const org_img_url = req.body.org_img_url;
  const about = req.body.about;
  const query = `
  UPDATE organizations 
  SET org_name = $1,
  org_location = $2,
  org_img_url = $3,
  about = $4
  WHERE org_user_id = $5;
  `;
  pool
    .query(query, [org_name, org_location, org_img_url, about, id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});


module.exports = router;

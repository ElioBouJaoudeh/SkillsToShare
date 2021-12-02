const router = require('express').Router();
let Profile = require('../models/profile.model');

router.route('/').get((req, res) => {
  Profile.find()
    .then(profiles => res.json(profiles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const city = req.body.city;
  const street = req.body.street;
  const country = req.body.country;

  const newProfile= new Profile({
    first_name,
    last_name,
    city,
    street,
    country,
  });

  newProfile.save()
    .then(() => res.json('Profile added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
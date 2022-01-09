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
  const email = req.body.email;

  const newProfile= new Profile({
    first_name,
    last_name,
    city,
    street,
    country,
    email,
  });

  newProfile.save()
    .then(() => res.json('Profile added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Profile.findById(req.params.id)
    .then(profile => res.json(profile))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Profile.findByIdAndDelete(req.params.id)
    .then(() => res.json('Profile deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Profile.findById(req.params.id)
    .then(profile => {
      profile.first_name = req.body.first_name;
      profile.last_name = req.body.last_name;
      profile.city = req.body.city;
      profile.street = req.body.street;
      profile.country = req.body.country;
      profile.email = req.body.email;

      profile.save()
        .then(() => res.json('Profile updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
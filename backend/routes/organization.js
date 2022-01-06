const router = require('express').Router();
let Organization = require('../models/organization.model');

router.route('/').get((req, res) => {
  Organization.find()
    .then(orgs => res.json(orgs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const orgname = req.body.orgname;
  const address = req.body.address;
  const fax = req.body.fax;
  const number = req.body.number;
  const website = req.body.website;

  const newOrg = new Organization({
    orgname,
    address,
    fax,
    number,
    website,
  });

  newOrg.save()
    .then(() => res.json('Organization added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Organization.findById(req.params.id)
    .then(org => res.json(org))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Organization.findByIdAndDelete(req.params.id)
    .then(() => res.json('Organization deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Organization.findById(req.params.id)
    .then(org => {
      org.orgname = req.body.orgname;
      org.address = req.body.address;
      org.number = req.body.number;
      org.fax = req.body.fax;
      org.website = req.body.website;

      org.save()
        .then(() => res.json('Organization updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
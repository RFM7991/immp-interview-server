const express = require('express');
const router = express.Router();
const sqlite = require('../sqlite3');

router.get('/', async function(req, res) {
  const data = await sqlite.getAllContacts()
  res.send(data);
});

router.post('/', async function(req, res) {
  const data = await sqlite.createContact(req.body)
  res.send(data);
});

router.put('/', async function(req, res) {
  const data = await sqlite.updateContact(req.body)
  res.send(data);
});

router.delete('/', async function(req, res) {
  const data = await sqlite.deleteContact(req.body)
  res.send(data);
});

module.exports = router;

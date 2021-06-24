const express = require('express');
const router = express.Router();
const contactsHandler = require('../handlers/contacts');

router.get('/', async function(req, res) {
  const data = await contactsHandler.getAllContacts()
  res.send(data);
});

router.post('/', async function(req, res) {
  const data = await contactsHandler.createContact(req.body)
  res.send(data);
});

router.put('/', async function(req, res) {
  const data = await contactsHandler.updateContact(req.body)
  res.send(data);
});

router.delete('/:contactId', async function(req, res) {
  const { contactId } = req.params;
  const data = await contactsHandler.deleteContact(contactId);
  res.send(data);
});

module.exports = router;

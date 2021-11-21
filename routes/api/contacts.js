const express = require('express');
const { validation, ctrlWrapper } = require('../../middleware/index');
const contactsCtrl = require('../../controllers/contacts');
const contactsSchema = require('../../schemas/contacts');

const router = express.Router();

router.get('/', ctrlWrapper(contactsCtrl.listContacts));

router.get('/:contactId', ctrlWrapper(contactsCtrl.getContactById));

router.post(
  '/',
  validation(contactsSchema),
  ctrlWrapper(contactsCtrl.addContact),
);

router.delete('/:contactId', ctrlWrapper(contactsCtrl.removeContact));

router.patch(
  '/:contactId',
  validation(contactsSchema),
  contactsCtrl.updateContact,
);

module.exports = router;

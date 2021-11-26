const express = require('express');
const { validation, ctrlWrapper } = require('../../middlewares/index');
const contactsCtrl = require('../../controllers/contacts');
const contactsSchema = require('../../schemas/contacts');

const router = express.Router();

router.get('/', ctrlWrapper(contactsCtrl.listContacts));

router.get('/:id', ctrlWrapper(contactsCtrl.getContactById));

router.post(
  '/',
  validation(contactsSchema),
  ctrlWrapper(contactsCtrl.addContact),
);

router.delete('/:id', ctrlWrapper(contactsCtrl.removeContact));

router.patch('/:id', validation(contactsSchema), contactsCtrl.updateContact);

module.exports = router;

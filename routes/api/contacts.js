const express = require('express');
const { validation, ctrlWrapper } = require('../../middlewares/index');
const contactsCtrl = require('../../controllers/contacts');
const { joiContactsSchema, joiFavoriteContactSchema } = require('../../models/contacts');

const router = express.Router();

router.get('/', ctrlWrapper(contactsCtrl.listContacts));

router.get('/:id', ctrlWrapper(contactsCtrl.getContactById));

router.post(
  '/',
  validation(joiContactsSchema),
  ctrlWrapper(contactsCtrl.addContact),
);

router.delete('/:id', ctrlWrapper(contactsCtrl.removeContact));

router.patch('/:id', validation(joiContactsSchema), contactsCtrl.updateContact);
router.patch(
  '/:id/favorite',
  validation(joiFavoriteContactSchema),
  contactsCtrl.updateStatusContact,
);

module.exports = router;

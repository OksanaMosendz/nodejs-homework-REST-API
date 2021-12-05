const express = require('express');
const { validation, ctrlWrapper } = require('../../middlewares/index');
const usersCtrl = require('../../controllers/users');

const { joiUserSchema } = require('../../models/user');

const router = express.Router();

// router.get('/', ctrlWrapper(contactsCtrl.listContacts));

// router.get('/:id', ctrlWrapper(contactsCtrl.getContactById));

router.post('/signup', validation(joiUserSchema), usersCtrl.signup);
router.post('/login', validation(joiUserSchema), usersCtrl.login);

// router.delete('/:id', ctrlWrapper(contactsCtrl.removeContact));

// router.patch('/:id', validation(joiContactsSchema), contactsCtrl.updateContact);
// router.patch(
//   '/:id/favorite',
//   validation(joiFavoriteContactSchema),
//   contactsCtrl.updateStatusContact,
// );

module.exports = router;

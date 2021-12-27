const express = require('express');
const {
  validation,
  upload,
  ctrlWrapper,
  auth,
} = require('../../middlewares/index');
const usersCtrl = require('../../controllers/users');

const { joiUserSchema } = require('../../models/user');

const router = express.Router();

router.post(
  '/signup',
  validation(joiUserSchema),
  ctrlWrapper(usersCtrl.signup),
);
router.post('/login', validation(joiUserSchema), ctrlWrapper(usersCtrl.login));
router.get('/current', auth, ctrlWrapper(usersCtrl.getCurrent));
router.post('/logout', auth, ctrlWrapper(usersCtrl.logout));

router.patch('/', auth, ctrlWrapper(usersCtrl.updateSubscription));

router.patch(
  '/avatars',
  auth,
  upload.single('avatar'),
  ctrlWrapper(usersCtrl.updateAvatar),
);

router.get('/verify/:verificationToken', ctrlWrapper(usersCtrl.verifyEmail));
router.post('/verify/', ctrlWrapper(usersCtrl.reverifyEmail));

module.exports = router;

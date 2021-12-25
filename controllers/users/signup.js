const { User } = require('../../models/index');
const { Conflict } = require('http-errors');
const { sendEmail } = require('../../helpers/index');
const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const { nanoid } = require('nanoid');

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict('Email in use');
  }
  const avatarURL = gravatar.url(email);
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const verificationToken = nanoid();

  await User.create({
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: 'Подтверждение email',
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Подтвердитe email</a>`,
  };

  await sendEmail(mail);

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      email,
      password,
      avatarURL,
      verificationToken,
    },
  });
};

module.exports = signup;

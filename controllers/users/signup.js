const { User } = require('../../models/index');
const { Conflict } = require('http-errors');
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict('Email in use');
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  await User.create({ email, password: hashPassword });
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      email,
      password,
    },
  });
};

module.exports = signup;

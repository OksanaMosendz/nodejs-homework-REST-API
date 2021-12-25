const { User } = require('../../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && bcrypt.compareSync(password, user.password) && user.verify) {
    const { subscription } = user;
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
    await User.findByIdAndUpdate(user._id, { token });
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        token,
        user: {
          email,
          subscription,
        },
      },
    });
  } else {
    res.status(401).json({
      message: 'Email is wrong or not verify, or password is wrong',
    });
  }
};

module.exports = login;

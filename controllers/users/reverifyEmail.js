const { User } = require('../../models/index');
const { BadRequest } = require('http-errors');
const { sendEmail } = require('../../helpers/index');

const reverifyEmail = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw BadRequest('missing required field email');
  }

  const user = await User.findOne({ email });
  if (user.verify) {
    throw BadRequest('Verification has already been passed');
  } else {
    const mail = {
      to: email,
      subject: 'Подтверждение email',
      html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${user.verificationToken}">Подтвердитe email</a>`,
    };

    await sendEmail(mail);

    res.json({
      message: 'Verification email sent',
    });
  }
};

module.exports = reverifyEmail;

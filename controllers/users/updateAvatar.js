const { User } = require('../../models/index');
const path = require('path');
const fs = require('fs/promises');
const avatarsDir = path.join(__dirname, '../../public/avatars');

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  try {
    const resultUpload = path.join(avatarsDir, originalname);

    await fs.rename(tempUpload, resultUpload);
    const avatarUrl = path.join('public', 'avatars', originalname);
    console.log(avatarUrl);
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { avatarUrl });
    res(200).json({
      avatarUrl,
    });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = updateAvatar;

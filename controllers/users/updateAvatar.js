const { User } = require('../../models/index');
const path = require('path');
const fs = require('fs/promises');
const Jimp = require('jimp');
const { resize } = require('jimp');
const avatarsDir = path.join(__dirname, '../../public/avatars');

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id } = req.user;
  const imageName = `${_id}_${originalname}`;
  try {
    const resultUpload = path.join(avatarsDir, imageName);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join('public', 'avatars', imageName);
    await User.findByIdAndUpdate(_id, { avatarURL });

    res.json({
      avatarURL,
    });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = updateAvatar;

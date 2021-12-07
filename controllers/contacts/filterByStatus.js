const { Contacts } = require('../../models/index');

const filterByStatus = async (req, res, next) => {
  const { _id } = req.user;
  const { favorite } = req.query;

  if (!favorite) return next();
  const result = await Contacts.find({
    owner: _id,
    favorite: favorite,
  }).populate('owner', '_id name email phone favorite');
  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = filterByStatus;

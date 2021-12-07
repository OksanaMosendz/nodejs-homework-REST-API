const { Contacts } = require('../../models/index');

const listContacts = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const result = await Contacts.find({ owner: _id }, '', {
    limit: Number(limit),
    skip,
  }).populate('owner', '_id name email phone favorite');

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = listContacts;

const { Contacts } = require('../../models/index');

const listContacts = async (req, res) => {
  const { _id } = req.user;
  const result = await Contacts.find({ owner: _id }).populate(
    'owner',
    '_id name email',
  );
  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = listContacts;

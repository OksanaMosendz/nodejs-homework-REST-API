const { Contacts } = require('../../models/index');

const listContacts = async (req, res) => {
  const result = await Contacts.find({});
  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = listContacts;

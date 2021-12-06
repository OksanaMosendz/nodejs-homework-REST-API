const { Contacts } = require('../../models/index');

const addContact = async (req, res) => {
  const { _id } = req.user;
  const result = await Contacts.create({ ...req.body, owner: _id });
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addContact;

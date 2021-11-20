const contactsOperations = require('../../model/contacts/index');

const listContacts = async (req, res) => {
  const result = await contactsOperations.listContacts();
  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = listContacts;

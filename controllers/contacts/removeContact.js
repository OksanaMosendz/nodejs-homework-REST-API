const contactsOperations = require('../../model/contacts/index');
const { NotFound } = require('http-errors');

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = contactsOperations.removeContact(id);
  if (!result) {
    throw new NotFound(`Product with id=${id} not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'Product is deleted',
    data: {
      result,
    },
  });
};

module.exports = removeContact;

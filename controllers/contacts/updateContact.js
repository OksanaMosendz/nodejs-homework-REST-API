const contactsOperations = require('../../model/contacts/index');
const { NotFound } = require('http-errors');

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsOperations.updateContact(id, req.body);

  if (!result) {
    throw new NotFound(`Product with id=${id} not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateContact;

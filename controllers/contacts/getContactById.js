const contactsOperations = require('../../model/contacts/index');
const { NotFound } = require('http-errors');

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = contactsOperations.getContactById(id);
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
module.exports = getContactById;

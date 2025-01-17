const { Contacts } = require('../../models/index');
const { NotFound } = require('http-errors');

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contacts.findByIdAndRemove(id);
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'Contact is deleted',
    data: {
      result,
    },
  });
};

module.exports = removeContact;

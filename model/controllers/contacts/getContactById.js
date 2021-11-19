const listContacts = require('./listContacts');

const getContactById = async contactId => {
  const contactList = await listContacts();
  const contact = contactList.find(item => item.id === contactId);
  if (!contact) {
    return null;
  }
  return contact;
};
module.exports = getContactById;

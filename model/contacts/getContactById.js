const listContacts = require('./listContacts');

const getContactById = async id => {
  const contactList = await listContacts();
  const contact = contactList.find(item => `${item.id}` === id);
  if (!contact) {
    return null;
  }
  return contact;
};
module.exports = getContactById;

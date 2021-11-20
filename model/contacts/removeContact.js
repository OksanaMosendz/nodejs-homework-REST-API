const fs = require('fs/promises');
const listContacts = require('./listContacts');
const path = require('path');
const contactsPath = path.join(__dirname, './contacts.json');

const removeContact = async contactId => {
  const contactList = await listContacts();
  const contactIndex = contactList.findIndex(item => item.id === contactId);
  if (contactIndex === -1) {
    return null;
  }
  const deletedContact = contactList.splice(contactIndex, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contactList));
  return deletedContact;
};

module.exports = removeContact;

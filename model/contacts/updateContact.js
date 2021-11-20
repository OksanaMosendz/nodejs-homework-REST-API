const fs = require('fs/promises');
const listContacts = require('./listContacts');
const path = require('path');
const contactsPath = path.join(__dirname, './contacts.json');

const updateContact = async (contactId, body) => {
  const contactList = await listContacts();
  const contactIndex = contactList.findIndex(item => item.id === contactId);
  if (contactIndex === -1) {
    return null;
  }
  contactList[contactIndex] = { contactId, ...body };
  await fs.writeFile(contactsPath, JSON.stringify(contactList));
  return contactList[contactIndex];
};

module.exports = updateContact;

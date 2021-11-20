const fs = require('fs/promises');
const path = require('path');
const contactsPath = path.join(__dirname, './contacts.json');

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contactList = JSON.parse(data);
  return contactList;
};

module.exports = listContacts;

const fs = require('fs/promises');
const uniqid = require('uniqid');
const listContacts = require('./listContacts');
const path = require('path');
const contactsPath = path.join(__dirname, '/model/contacts.json');

const addContact = async body => {
  const contactList = await listContacts();
  const newContact = { ...body, id: uniqid() };
  contactList.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contactList));
  return newContact;
};

module.exports = addContact;

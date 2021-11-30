const { Schema, model } = require('mongoose');
const Joi = require('joi');

const contactsSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true },
);
const Contacts = model('contacts', contactsSchema);

const joiContactsSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
});

const joiFavoriteContactSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    'any.required': 'missing field favorite',
  }),
});

module.exports = contactsSchema;

module.exports = { Contacts, joiContactsSchema, joiFavoriteContactSchema };

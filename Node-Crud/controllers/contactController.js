const contacts = require("../data/contactData");

// Obtener todos los usuarios
exports.Get_Contact = (req, res) => {
  res.json(contacts);
};

// Agregar un usuario
exports.Add_Contact = (req, res) => {
  const contact = req.body;
  const id = contacts.length + 1;
  contact.id = id;
  contacts.push(contact);
  res.send("Contact added");
};

// Actualizar un usuario
exports.Update_Contact = (req, res) => {
  const id = req.params.id;
  const updatedContact = req.body;
  updatedContact.id = parseInt(id);
  const index = contacts.findIndex((contact) => contact.id == id);
  contacts[index] = updatedContact;
  res.send("Contact updated");
};

// Eliminar un usuario

exports.Delete_Contact = (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).send("ID is required");
  }
  const index = contacts.findIndex((contact) => contact.id == id);
  if (index === -1) {
    return res.status(404).send("Contact not found");
  }
  contacts.splice(index, 1);
  res.send("Contact deleted");
};

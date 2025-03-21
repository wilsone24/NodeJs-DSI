const contacts = require("../data/contactData");

// Obtener todos los usuarios
exports.Get_Contact = (req, res) => {
  res.json(contacts);
};

// Agregar un usuario
exports.Add_Contact = (req, res) => {
  const id = req.params.id;
  const updatedContact = req.body;
  updatedContact.id = parseInt(id);
  const index = contacts.findIndex((contact) => contact.id == id);
  contacts[index] = updatedContact;
  res.send("Contact updated");
};

// Actualizar un usuario
exports.Update_Contact = (req, res) => {
  const id = req.params.id;
  contacts = contacts.filter((contact) => contact.id != id);
  res.send("Contact deleted");
};

// Eliminar un usuario

exports.Delete_Contact = (req, res) => {
  contacts = contacts.filter((contact) => contact.id != id);
  res.send("Contact deleted");
};

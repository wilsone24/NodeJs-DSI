const express = require("express");
const router = express.Router();

const contacts = require("../data/contactData");

router.get("/api/contacts", (req, res) => {
  res.json(contacts);
});

router.post("/api/contacts", (req, res) => {
  const newContact = req.body;
  newContact.id = contacts.length + 1;
  contacts.push(newContact);
  res.send("Contact added");
});

router.put("/api/contacts/:id", (req, res) => {
  const id = req.params.id;
  const updatedContact = req.body;
  updatedContact.id = parseInt(id);
  const index = contacts.findIndex((contact) => contact.id == id);
  contacts[index] = updatedContact;
  res.send("Contact updated");
});

router.delete("/api/contacts/:id", (req, res) => {
  const id = req.params.id;
  contacts = contacts.filter((contact) => contact.id != id);
  res.send("Contact deleted");
});
module.exports = router;

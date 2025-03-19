const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Constant Values
const app = express();
const port = process.env.PORT;
app.use(express.json()); // Middleware para JSON
app.use(cors()); // Middleware para habilitar CORS

let contacts = [
  {
    id: 1,
    name: "Juan Pérez",
    phone: "123456789",
    email: "juan.perez@example.com",
  },
  {
    id: 2,
    name: "María Gómez",
    phone: "987654321",
    email: "maria.gomez@example.com",
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    phone: "321654987",
    email: "carlos.rodriguez@example.com",
  },
  {
    id: 4,
    name: "Ana Fernández",
    phone: "654321987",
    email: "ana.fernandez@example.com",
  },
  {
    id: 5,
    name: "Pedro Sánchez",
    phone: "741852963",
    email: "pedro.sanchez@example.com",
  },
  {
    id: 6,
    name: "Laura Ramírez",
    phone: "852963741",
    email: "laura.ramirez@example.com",
  },
  {
    id: 7,
    name: "Diego Torres",
    phone: "963741852",
    email: "diego.torres@example.com",
  },
  {
    id: 8,
    name: "Gabriela Castillo",
    phone: "369258147",
    email: "gabriela.castillo@example.com",
  },
  {
    id: 9,
    name: "Ricardo Morales",
    phone: "147258369",
    email: "ricardo.morales@example.com",
  },
  {
    id: 10,
    name: "Sofía Herrera",
    phone: "258369147",
    email: "sofia.herrera@example.com",
  },
  {
    id: 11,
    name: "Javier Mendoza",
    phone: "159357246",
    email: "javier.mendoza@example.com",
  },
  {
    id: 12,
    name: "Patricia Ortega",
    phone: "753951468",
    email: "patricia.ortega@example.com",
  },
  {
    id: 13,
    name: "Hugo Vázquez",
    phone: "369147258",
    email: "hugo.vazquez@example.com",
  },
  {
    id: 14,
    name: "Daniela Ríos",
    phone: "456789123",
    email: "daniela.rios@example.com",
  },
  {
    id: 15,
    name: "Miguel Suárez",
    phone: "987123654",
    email: "miguel.suarez@example.com",
  },
  {
    id: 16,
    name: "Andrea Luna",
    phone: "741258963",
    email: "andrea.luna@example.com",
  },
  {
    id: 17,
    name: "Francisco Reyes",
    phone: "369852147",
    email: "francisco.reyes@example.com",
  },
  {
    id: 18,
    name: "Lucía Medina",
    phone: "258147369",
    email: "lucia.medina@example.com",
  },
  {
    id: 19,
    name: "Roberto Silva",
    phone: "753246951",
    email: "roberto.silva@example.com",
  },
  {
    id: 20,
    name: "Elena Vega",
    phone: "951753468",
    email: "elena.vega@example.com",
  },
];

app.get("/api/contacts", (req, res) => {
  res.json(contacts);
});

app.post("/api/contacts", (req, res) => {
  const newContact = req.body;
  newContact.id = contacts.length + 1;
  contacts.push(newContact);
  res.send("Contact added");
});

app.put("/api/contacts/:id", (req, res) => {
  const id = req.params.id;
  const updatedContact = req.body;
  updatedContact.id = parseInt(id);
  const index = contacts.findIndex((contact) => contact.id == id);
  contacts[index] = updatedContact;
  res.send("Contact updated");
});

app.delete("/api/contacts/:id", (req, res) => {
  const id = req.params.id;
  contacts = contacts.filter((contact) => contact.id != id);
  res.send("Contact deleted");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

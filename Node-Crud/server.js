const express = require("express");
const cors = require("cors");
require("dotenv").config();
const contactsRouter = require("./routes/contactRoute");

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());

app.use("/", contactsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

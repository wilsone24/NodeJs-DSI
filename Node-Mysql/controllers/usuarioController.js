const connection = require("../data/db");

// Obtener todos los usuarios
exports.obtenerUsuarios = (req, res) => {
  connection.query("SELECT * FROM usuarios", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Agregar un usuario
exports.agregarUsuario = (req, res) => {
  const { nombre, email, edad } = req.body;
  const query = "INSERT INTO usuarios (nombre, email, edad) VALUES (?, ?, ?)";
  connection.query(query, [nombre, email, edad], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId, nombre, email, edad });
  });
};

// Actualizar un usuario
exports.actualizarUsuario = (req, res) => {
  const { id } = req.params;
  const { nombre, email, edad } = req.body;
  const query = "UPDATE usuarios SET nombre=?, email=?, edad=? WHERE id=?";
  connection.query(query, [nombre, email, edad, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Usuario actualizado correctamente" });
  });
};

// Eliminar un usuario
exports.eliminarUsuario = (req, res) => {
  const { id } = req.params;
  connection.query("DELETE FROM usuarios WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Usuario eliminado correctamente" });
  });
};

const { User } = require('../models/');

const getAll = async (req, res) => {
  const users = await User.findAll();
  if (!users) return res.status(500).json({ message: "Algo deu errado" });
  return res.status(200).json(users);
} 

const findById = async (req, res) => {
  const { id } = req.params;
  const getById = await User.findByPk(id);
  if (!getById) return res.status(404).json({ message: `Usuario id: ${id} não encontrado` });
  return res.status(200).json(getById);
}

module.exports = { getAll, findById }
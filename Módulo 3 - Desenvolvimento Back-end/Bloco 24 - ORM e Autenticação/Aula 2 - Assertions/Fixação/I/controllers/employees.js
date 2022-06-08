const { Addresses, Employee } = require('../models');

const getAll = async (_req, res) => {
  const allEmployees = await Employee.findAll({ includes: { model: Addresses, as: 'Address' } });
  if (!allEmployees) return res.status(500).json({ message: "Deu ruim brow" });
  return res.status(200).json(allEmployees);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const findById = await Employee.findByPk(id);
  if (!findById) return res.status(404).json({ message: `Usuario id: ${id} não está em casa` });
  return res.status(200).json(findById);
}

module.exports = { getAll, getById };
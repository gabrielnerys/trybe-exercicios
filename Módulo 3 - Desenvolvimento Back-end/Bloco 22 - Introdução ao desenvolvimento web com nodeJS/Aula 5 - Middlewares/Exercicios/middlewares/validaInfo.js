module.exports = (req, res, next) => {
  const { infos } = req.body;
  const chaves = Object.keys(infos)
  if (chaves.includes("saleDate", "warrantyPeriod")) {
    return next()
  } else {
    res.status(400).json({ message: 'O campo infos é obrigatório'});
  }
}
